// --- SVG Definitions for Robust Icon Toggling ---
const CHEVRON_DOWN_SVG = `<svg class="w-4 h-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
const CHEVRON_RIGHT_SVG = `<svg class="w-4 h-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;

const SUN_SVG = `<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const MOON_SVG = `<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;


// --- 2. CORE FUNCTIONS ---

// Theme Management Functions
function applyTheme(theme) {
    const htmlElement = document.documentElement;
    const toggleButton = document.getElementById('theme-toggle');

    // Reference Prism theme links
    const lightThemeLink = document.getElementById('prism-light-theme');
    const darkThemeLink = document.getElementById('prism-dark-theme');

    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        toggleButton.innerHTML = SUN_SVG; // Show sun icon in dark mode
        toggleButton.setAttribute('aria-label', 'Switch to Light Mode');

        // Switch Prism themes: enable dark, disable light
        if (darkThemeLink) darkThemeLink.disabled = false;
        if (lightThemeLink) lightThemeLink.disabled = true;

    } else {
        htmlElement.classList.remove('dark');
        toggleButton.innerHTML = MOON_SVG; // Show moon icon in light mode
        toggleButton.setAttribute('aria-label', 'Switch to Dark Mode');

        // Switch Prism themes: enable light, disable dark
        if (darkThemeLink) darkThemeLink.disabled = true;
        if (lightThemeLink) lightThemeLink.disabled = false;
    }
    localStorage.setItem('theme', theme);

    // Re-run highlighting to ensure new CSS rules are applied immediately
    if (window.Prism) {
        Prism.highlightAll();
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Function to render the main content area by fetching content from a file
async function renderContent(pageId, updateHistory = true) {
    const pageMeta = pageContent[pageId];
    const titleElement = document.getElementById('content-title');
    const bodyElement = document.getElementById('content-body');
    const navMenu = document.getElementById('nav-menu');

    if (!pageMeta) {
        titleElement.textContent = "Content Not Found";
        bodyElement.innerHTML = "<p>The requested page could not be located in the documentation structure.</p>";
        return;
    }

    // Update Main Content
    titleElement.textContent = pageMeta.title;

    // Show a loading state
    bodyElement.innerHTML = '<p class="text-gray-500 dark:text-gray-400">Loading content...</p>';

    try {
        // Fetch the content from the corresponding HTML file
        const response = await fetch(`content/${pageId}.html`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentHtml = await response.text();

        // Inject the fetched content
        bodyElement.innerHTML = contentHtml;

        // --- Process <textarea> blocks to prevent HTML parsing issues ---
        // Find all <code> elements that contain a <textarea>
        bodyElement.querySelectorAll('code > textarea').forEach(textArea => {
            const codeBlock = textArea.parentElement;
            // Set the code block's text content to the raw value of the textarea
            codeBlock.textContent = textArea.value;
            // The textarea is no longer needed and can be removed
            textArea.remove();
        });

        // IMPORTANT: Call Prism.highlightAll() to apply syntax highlighting after
        // the new content is injected into the DOM.
        if (window.Prism) {
            Prism.highlightAll();
        } else {
            console.warn("Prism.js not loaded. Syntax highlighting skipped.");
        }

        // IMPORTANT: Tell MathJax to re-render the new content.
        if (window.MathJax) {
            // Use the promise-based approach for reliability.
            // This ensures MathJax processes the content after it's ready.
            window.MathJax.startup.promise.then(() => {
                window.MathJax.typesetPromise([bodyElement]);
            });
        }

    } catch (error) {
        console.error("Error fetching page content:", error);
        bodyElement.innerHTML = `<p class="text-red-500">Error: Could not load content for this page. Please check the file path and network connection.</p>`;
    }


    // Update Active State in Navigation
    const activeLink = navMenu.querySelector('.sidebar-item-active');
    if (activeLink) {
        activeLink.classList.remove('sidebar-item-active');
    }
    const newActiveLink = navMenu.querySelector(`[data-page-id="${pageId}"]`);
    if (newActiveLink) {
        newActiveLink.classList.add('sidebar-item-active');
    }

    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
        toggleSidebar(false);
    }

    // --- NEW: Update URL with query parameter ---
    // Update the browser's history to reflect the current page.
    if (updateHistory) {
        const newUrl = `${window.location.pathname}?page=${pageId}`;
        window.history.pushState({ pageId: pageId }, '', newUrl);
    }
}

// Function to handle category expansion/collapse
function toggleCategory(categoryId) {
    const content = document.getElementById(`content-${categoryId}`);
    const icon = document.getElementById(`icon-${categoryId}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.innerHTML = CHEVRON_DOWN_SVG;
    } else {
        content.classList.add('hidden');
        icon.innerHTML = CHEVRON_RIGHT_SVG;
    }
}

// Function to filter menu links based on search input
window.filterMenu = function() {
    const searchInput = document.getElementById('menu-search');
    // Get the search term, convert to lowercase, and trim whitespace
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Select all category wrappers (Level 1 containers)
    const categories = document.querySelectorAll('.category-wrapper');

    categories.forEach(categoryWrapper => {
        let categoryHasMatches = false;

        // Get the subpages container (Level 2 list)
        const pageLinksContainer = categoryWrapper.querySelector('.subpages-container');
        // Get all individual page link wrappers
        const pageLinks = categoryWrapper.querySelectorAll('.page-link-wrapper');

        // 1. Iterate through page links (Level 2)
        pageLinks.forEach(linkWrapper => {
            const link = linkWrapper.querySelector('a.page-link');
            // Get the visible title text
            const linkTitle = link.textContent.toLowerCase().trim();

            if (searchTerm === '' || linkTitle.includes(searchTerm)) {
                // Show the link
                linkWrapper.classList.remove('hidden');
                categoryHasMatches = true;
            } else {
                // Hide the link
                linkWrapper.classList.add('hidden');
            }
        });

        // 2. Determine visibility and expansion of the Level 1 category
        if (searchTerm === '') {
            // If search is cleared, ensure category is visible (it will respect its original toggle state)
            categoryWrapper.classList.remove('hidden');
            // Page links container will respect its toggle state (default: open)
        } else if (categoryHasMatches) {
            // If searching AND the category has matches, show the whole category
            categoryWrapper.classList.remove('hidden');

            // Force the page links container open to show the results
            pageLinksContainer.classList.remove('hidden');

            // Change the icon to 'down' (open)
            const categoryId = categoryWrapper.id.replace('category-wrapper-', '');
            const icon = document.getElementById(`icon-${categoryId}`);
            // Check if icon exists and needs updating (less fragile than checking path)
            if (icon) {
                icon.innerHTML = CHEVRON_DOWN_SVG;
            }

        } else {
            // If searching AND no matches in category, hide the entire category
            categoryWrapper.classList.add('hidden');
        }
    });
}


// Function to build and inject the entire menu structure
function buildMenu() {
    const navMenu = document.getElementById('nav-menu');
    let html = '';

    // Use the defined SVG string for initial state (down/expanded)
    const categoryIconSvg = CHEVRON_DOWN_SVG;

    // Iterate over the menu structure to build the navigation
    menuStructure.forEach(category => {
        // Category Header (Level 1)
        // FIX: Forced dark background (bg-gray-700) and light text (text-gray-100)
        html += `
            <div class="category-wrapper" id="category-wrapper-${category.categoryId}">
                <button class="flex items-center justify-between w-full p-2 text-sm font-semibold bg-gray-700 text-gray-100 hover:bg-gray-600 rounded-lg transition duration-150"
                    onclick="toggleCategory('${category.categoryId}')">
                    <span>${category.categoryTitle}</span>
                    <span id="icon-${category.categoryId}">
                        ${categoryIconSvg}
                    </span>
                </button>

                <!-- Subpages Container (Level 2) -->
                <div id="content-${category.categoryId}" class="ml-3 mt-1 space-y-1 subpages-container">
        `;

        // Iterate over the page IDs within the category
        category.pageIds.forEach(pageId => {
            // Get the page title from the pageContent object
            const page = pageContent[pageId];

            // IMPORTANT: We must check if content exists for the ID before rendering the link
            if (page) {
                // Subpage Link (Level 2) - Wrapped for easy filtering
                html += `
                        <div class="page-link-wrapper">
                            <a href="#" data-page-id="${pageId}" class="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/40 hover:text-teal-700 dark:hover:text-teal-400 transition duration-150 page-link">
                                ${page.title}
                            </a>
                        </div>
                `;
            } else {
                console.warn(`Content missing for pageId: ${pageId}`);
            }
        });

        html += `
                </div>
            </div>
        `;
    });

    navMenu.innerHTML = html;

    // Use a single, delegated event listener on the parent menu for efficiency.
    // This is better than attaching a listener to every single link.
    navMenu.addEventListener('click', function(e) {
        // Find the actual link that was clicked, even if the click was on an inner element.
        const link = e.target.closest('a.page-link');

        // If the click wasn't on a page link, do nothing.
        if (!link) return;

        e.preventDefault(); // Prevent the link from navigating.
        const pageId = link.dataset.pageId;
        renderContent(pageId);
    });
}

// Mobile Sidebar Toggle
function toggleSidebar(force) {
    const body = document.body;
    const overlay = document.getElementById('mobile-overlay');

    if (force === true) {
        body.classList.add('sidebar-open');
        overlay.classList.remove('hidden');
    } else if (force === false) {
        body.classList.remove('sidebar-open');
        overlay.classList.add('hidden');
    } else {
        // Toggle
        body.classList.toggle('sidebar-open');
        if (body.classList.contains('sidebar-open')) {
            overlay.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
        }
    }
}

/**
 * Checks for duplicate categoryId values in the menuStructure and displays a
 * visible warning if any are found. This is a development-time utility to
 * prevent configuration errors.
 */
function checkForDuplicateCategoryIds() {
    if (typeof menuStructure === 'undefined') {
        console.error("`menuStructure` is not defined. Cannot check for duplicate category IDs.");
        return;
    }

    const seenIds = new Set();
    const duplicates = [];

    menuStructure.forEach(category => {
        if (seenIds.has(category.categoryId)) {
            duplicates.push(category.categoryId);
        } else {
            seenIds.add(category.categoryId);
        }
    });

    if (duplicates.length > 0) {
        const uniqueDuplicates = [...new Set(duplicates)];
        const warningBanner = document.createElement('div');
        warningBanner.style.cssText = `
            position: fixed; top: 10px; left: 50%; transform: translateX(-50%);
            background-color: #ef4444; color: white; padding: 1rem; border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            z-index: 9999; font-family: monospace; font-size: 14px; max-width: 80%;
            border: 2px solid #f87171;
        `;
        warningBanner.innerHTML = `
            <strong style="font-weight: bold; font-size: 16px;">Configuration Warning!</strong>
            <p style="margin-top: 0.5rem;">Duplicate \`categoryId\` values found in \`content.js\`.</p>
            <p style="margin-top: 0.25rem;">Each category must have a unique ID.</p>
            <p style="margin-top: 0.75rem; font-weight: bold;">Duplicates: <span style="background-color: #b91c1c; padding: 2px 6px; border-radius: 4px;">${uniqueDuplicates.join(', ')}</span></p>
        `;
        document.body.appendChild(warningBanner);
    }
}

// --- 3. INITIALIZATION ---

function initializeApp() {
    try {
        // 1. Run development-time checks
        checkForDuplicateCategoryIds();

        // 2. Apply the correct theme state, including icons and Prism styles
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);

        // 3. Build the dynamic navigation menu
        buildMenu();

        // --- NEW: Determine initial page from URL or default ---
        const urlParams = new URLSearchParams(window.location.search);
        let initialPageId = urlParams.get('page');

        // Validate the pageId from the URL. If it's not valid, fall back to default.
        if (!initialPageId || !pageContent[initialPageId]) {
            // Set a default page if the one from the URL is invalid or missing
            if (menuStructure.length > 0 && menuStructure[0].pageIds.length > 0) {
                initialPageId = menuStructure[0].pageIds[0]; // e.g., 'intro'
            }
        }

        // Render the initial content without pushing to history (as it's the initial state)
        if (initialPageId) {
            renderContent(initialPageId, false);
        }

        // 4. Set up event listeners
        document.getElementById('menu-button').addEventListener('click', () => toggleSidebar());
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

        // --- CORRECTED: MENU EXPAND/COLLAPSE TOGGLE LOGIC ---
        const menuToggleBtn = document.getElementById('menu-toggle-all');
        const menuToggleText = document.getElementById('menu-toggle-all-text');
        const navMenu = document.getElementById('nav-menu');

        if (menuToggleBtn && menuToggleText && navMenu) {
            // Set initial state. We assume the menu is expanded by default.
            let isExpanded = true;
            menuToggleText.textContent = 'Collapse All';

            menuToggleBtn.addEventListener('click', () => {
                // Toggle the state
                isExpanded = !isExpanded;

                // Find all subpage containers and their corresponding icons
                const allSubpageContainers = navMenu.querySelectorAll('.subpages-container');

                allSubpageContainers.forEach(container => {
                    const iconId = container.id.replace('content-', 'icon-');
                    const icon = document.getElementById(iconId);

                    container.classList.toggle('hidden', !isExpanded);
                    if (icon) {
                        icon.innerHTML = isExpanded ? CHEVRON_DOWN_SVG : CHEVRON_RIGHT_SVG;
                    }
                });

                // Update the button text to reflect the next action
                menuToggleText.textContent = isExpanded ? 'Collapse All' : 'Expand All';
            });
        }
        // --- END: CORRECTED LOGIC ---

        // --- NEW: Handle browser back/forward navigation ---
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.pageId) {
                // Render content for the state's pageId without adding a new history entry
                renderContent(event.state.pageId, false);
            }
        });

        // 5. Render Lucide icons now that the DOM is fully ready
        if (window.lucide) {
            lucide.createIcons();
        }

    } catch (e) {
        console.error("Initialization Error: Could not build the menu.", e);
        // Fallback: If buildMenu fails, notify the user in the sidebar
        document.getElementById('nav-menu').innerHTML = '<div class="p-4 text-red-500 text-sm font-semibold">Fatal Error: Could not build menu. Check console.</div>';
    }
}

// Run initialization after the entire document is parsed.
initializeApp();