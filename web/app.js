// ====================================================================
// --- APPLICATION LOGIC ---
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('main-nav');
    const contentContainer = document.getElementById('content-container');

    // --- 1. Build Navigation ---
    menuStructure.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'nav-category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.categoryTitle;
        categoryDiv.appendChild(categoryTitle);

        const ul = document.createElement('ul');
        category.pageIds.forEach(pageId => {
            const pageMeta = pageContent[pageId];
            if (pageMeta) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${pageId}`;
                a.textContent = pageMeta.title;
                a.dataset.pageId = pageId; // Store pageId for click handling
                li.appendChild(a);
                ul.appendChild(li);
            }
        });
        categoryDiv.appendChild(ul);
        navContainer.appendChild(categoryDiv);
    });

    // --- 2. Handle Navigation Clicks and Load Content ---
    navContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.dataset.pageId) {
            event.preventDefault();
            const pageId = event.target.dataset.pageId;
            loadContent(pageId);
        }
    });

    async function loadContent(pageId) {
        try {
            const response = await fetch(`content/${pageId}.html`);
            const html = await response.text();
            contentContainer.innerHTML = html;
            // MathJax 3 automatically re-renders new content, so no extra call is needed.
        } catch (error) {
            contentContainer.innerHTML = `<p>Error: Could not load content for ${pageId}.</p>`;
            console.error('Failed to fetch content:', error);
        }
    }
});