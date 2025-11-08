// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["intro", "essential-java", "substrings", "two-sum", "longest-consecutive-subsequence"]
    },
    {
        categoryTitle: "Recursion, DFS, DP",
        categoryId: "core-concepts",
        pageIds: ["simple-recursion", "interleaving-strings", "max-area-of-islands", "house-robber", "no-of-islands",
            "combination-sum", "subsets",
            "generate-parenthesis",
            "regex-matching"]
    },
    {
        categoryTitle: "BFS",
        categoryId: "core-concepts",
        pageIds: ["rotten-oranges"]
    },
    {
        categoryTitle: "Sliding Window",
        categoryId: "core-concepts",
        pageIds: ["max-consecutive-ones-iii"]
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
        categoryTitle: "Graphs",
        categoryId: "core-concepts",
        pageIds: ["the-maze-ii", "course-schedule"]
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
        categoryTitle: "Priority Queue",
        categoryId: "meeting-rooms-ii",
        pageIds: ["priority-queue-basics", "max-events-attendable", "meeting-rooms-ii"]
    },
    {
        categoryTitle: "Algorithmic Problems",
        categoryId: "meeting-rooms-ii",
        pageIds: ["longest-increasing-subsequence","max-subarray-sum","boyer-moore-voting","best-sightseeing-pair", "merge-intervals", "non-overlapping-intervals"]
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
    "substrings": {
        title: "Substrings"
    },
    "interleaving-strings": {
        title: "Interleaving Strings"
    },
    "two-sum": {
        title: "Two Sum"
    },
    "simple-recursion": {
        title: "Simple Recursion"
    },
    "subsets": {
        title: "Subsets"
    },
    "house-robber": {
        title: "House Robber"
    },
    "no-of-islands": {
        title: "Number of Islands"
    },
    "max-area-of-islands": {
        title: "Max Area of Islands"
    },
    "max-consecutive-ones-iii": {
        title: "Maximum Consecutive Ones III"
    },
    "priority-queue-basics": {
        title: "Basics"
    },
    "merge-intervals": {
        title: "Merge Intervals"
    },
    "max-events-attendable": {
        title: "Max Events Attendable"
    },
    "non-overlapping-intervals": {
        title: "Non-Overlapping Intervals"
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
    "combination-sum": {
        title: "Combination Sum"
    },
    "regex-matching": {
    title: "Regex Matching"
    },
    "longest-consecutive-subsequence": {
        title: "Longest Consecutive Subsequence"
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
    },
    "best-sightseeing-pair": {
        title: "Best Sightseeing Pair"
    },
    "the-maze-ii": {
        title: "The Maze II"
    },
    "course-schedule": {
        title: "Course Schedule"
    }
};