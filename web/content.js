// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["intro", "two-sum"]
    },
    {
        categoryTitle: "Recursion and DP",
        categoryId: "core-concepts",
        pageIds: ["house-robber", "no-of-islands"]
    },
    {
        categoryTitle: "Advanced Topics",
        categoryId: "meeting-rooms-ii",
        pageIds: ["meeting-rooms-ii"]
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
    "house-robber": {
        title: "House Robber"
    },
    "no-of-islands": {
        title: "Number of Islands"
    },
    "meeting-rooms-ii": {
        title: "Meeting Rooms II"
    }
};