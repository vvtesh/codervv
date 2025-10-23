// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["intro", "setup"] 
    },
    {
        categoryTitle: "Core Concepts",
        categoryId: "core-concepts",
        pageIds: ["data-layer", "tailwind-style", "code-examples"]
    },
    {
        categoryTitle: "Advanced Topics",
        categoryId: "advanced",
        pageIds: ["perf-opt"]
    }
];

// B) PAGE METADATA (Holds titles. Content is now in separate files in the /content/ directory)
const pageContent = {
    "intro": {
        title: "Introduction"
    },
    "setup": {
        title: "Setup and Installation"
    },
    "data-layer": {
        title: "The Data Layer"
    },
    "tailwind-style": {
        title: "Styling with Tailwind"
    },
    "code-examples": {
        title: "Code Highlighting Demo"
    },
    "perf-opt": {
        title: "Performance Optimization"
    }
};