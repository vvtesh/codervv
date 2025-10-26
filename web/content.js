// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["intro", "essential-java", "interleaving-strings", "two-sum"]
    },
    {
        categoryTitle: "Recursion, BFS, DFS, DP",
        categoryId: "core-concepts",
        pageIds: ["house-robber", "no-of-islands", "rotten-oranges", "generate-parenthesis"]
    },
    {
        categoryTitle: "Stacks",
        categoryId: "stacks",
        pageIds: ["longest-valid-parenthesis"]
    },
    {
        categoryTitle: "Monotonic Stacks",
        categoryId: "monotonic-stacks",
        pageIds: ["next-greater-element-i", "trapping-rain-water"]
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
        pageIds: ["meeting-rooms-ii", "longest-increasing-subsequence","max-subarray-sum","boyer-moore-voting"]
    }
];

// B) PAGE METADATA (Holds titles. Content is now in separate files in the /content/ directory)
const pageContent = {
    "intro": {
        title: "Introduction"
    },
    "essential-java": {
        title: "Essential Java"
    },
    "interleaving-strings": {
        title: "Interleaving Strings"
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
    },
    "max-subarray-sum": {
        title: "Maximum Subarray Sum (Kadane's algorithm)"
    },
    "longest-valid-parenthesis": {
        title: "Longest Valid Parentheses"
    },
    "generate-parenthesis": {
        title: "Generate Parentheses"
    },
    "boyer-moore-voting": {
    title: "Find Majority Item (Voting Algorithm)"
    },
    "trapping-rain-water": {
        title: "Trapping Rain Water"
    }
};