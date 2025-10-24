// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["intro", "two-sum", "two-sum-ii"]
    },
    {
        categoryTitle: "Recursion and DP",
        categoryId: "core-concepts",
        pageIds: ["house-robber", "tailwind-style", "code-examples"]
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
    "two-sum": {
        title: "Two Sum"
    },
    "two-sum-ii": {
        title: "Two Sum II"
    },
    "house-robber": {
        title: "House Robber"
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