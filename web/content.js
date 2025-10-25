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
        categoryTitle: "Recursion, BFS, DFS, DP",
        categoryId: "core-concepts",
        pageIds: ["house-robber", "no-of-islands", "rotten-oranges"]
    },
    {
        categoryTitle: "Monotonic Stacks",
        categoryId: "monotonic-stacks",
        pageIds: ["next-greater-element-i"]
    },
    {
        categoryTitle: "TreeMap (SortedMap)",
        categoryId: "core-concepts",
        pageIds: ["my-calendar-iii", "count-int-in-intervals"]
    },
    {
        categoryTitle: "Union Find",
        categoryId: "core-concepts",
        pageIds: ["union-find-basics", "water-distribution"]
    },
    {
        categoryTitle: "Advanced Topics",
        categoryId: "meeting-rooms-ii",
        pageIds: ["meeting-rooms-ii", "longest-increasing-subsequence"]
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
    },
    "my-calendar-iii": {
        title: "My Calendar III (Sweeping Line)"
    },
    "count-int-in-intervals": {
        title: "Count Integers in Intervals"
    },
    "longest-increasing-subsequence": {
        title: "Longest Increasing Subsequence"
    },
    "next-greater-element-i": {
        title: "Next Greater Element I"
    },
    "water-distribution": {
        title: "Water Distribution in a Village"
    },
    "rotten-oranges": {
        title: "Rotting Oranges"
    },
    "union-find-basics": {
        title: "Basics"
    }
};