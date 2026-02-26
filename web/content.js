// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
//CategoryIds must be unique. Else, a popup will appear to fix it.
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["intro", "essential-java", "substrings", "two-sum", "longest-consecutive-subsequence"]
    },
    {
        categoryTitle: "Binary Search",
        categoryId: "binary-search",
        pageIds: ["binary-search", "complete-binary-tree-nodes"]
    },
    {
        categoryTitle: "Linked List",
        categoryId: "linked-list",
        pageIds: ["palindrome-ll"]
    },
    {
        categoryTitle: "Backtracking",
        categoryId: "backtracking",
        pageIds: ["permutation", "subsets", "generate-parenthesis", "combination-sum", "factors"]
    },
    {
        categoryTitle: "Recursion, DFS",
        categoryId: "recursion-dfs",
        pageIds: [
            "interleaving-strings", "knapsack",
            "no-of-islands", "max-area-of-islands",
            "root-to-leaf-paths",
            "regex-matching"]
    },
    {
        categoryTitle: "DP",
        categoryId: "dp",
        pageIds: ["dp-basics", "edit-distance", "word-break-ii", "coin-change"]
    },
    {
        categoryTitle: "Recurrence Relation",
        categoryId: "recurrence",
        pageIds: ["house-robber", "unique-paths"]
    },
    {
        categoryTitle: "BFS",
        categoryId: "bfs",
        pageIds: ["rotten-oranges", "tree-rightside"]
    },
    {
        categoryTitle: "Sliding Window",
        categoryId: "sliding-window",
        pageIds: ["max-consecutive-ones-iii"]
    },
    {
        categoryTitle: "Stacks",
        categoryId: "stacks-general",
        pageIds: ["stack-basics", "longest-valid-parenthesis", "next-greater-element-i", "trapping-rain-water"]
    },
    {
        categoryTitle: "Graphs",
        categoryId: "graphs",
        pageIds: ["graph-basics", "the-maze-ii", "course-schedule"]
    },
    {
        categoryTitle: "TreeMap (SortedMap)",
        categoryId: "treemap",
        pageIds: ["my-calendar-iii", "count-int-in-intervals"]
    },
    {
        categoryTitle: "Union Find",
        categoryId: "union-find",
        pageIds: ["union-find-basics", "redundant-connections", "water-distribution"]
    },
    {
        categoryTitle: "Priority Queue",
        categoryId: "priority-queue",
        pageIds: ["priority-queue-basics", "max-events-attendable", "meeting-rooms-ii"]
    },
    {
        categoryTitle: "Algorithmic Problems",
        categoryId: "algorithmic-problems",
        pageIds: ["longest-increasing-subsequence","max-subarray-sum","boyer-moore-voting","best-sightseeing-pair", "merge-intervals", "non-overlapping-intervals", "counting-bits"]
    },
    {
        categoryTitle: "Miscellaneous",
        categoryId: "misc",
        pageIds: ["interesting-problems"]
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
    "binary-search": {
        title: "First Bad Version"
    },
    "palindrome-ll": {
        title: "Palindrome"
    },
    "complete-binary-tree-nodes": {
        title: "Count Nodes"
    },
    "root-to-leaf-paths": {
        title: "Paths from Root to Leaf"
    },
    "permutation": {
        title: "Permutation"
    },
    "factors": {
        title: "Factors"
    },
    "knapsack": {
        title: "Knapsack"
    },
    "unique-paths": {
        title: "Unique Paths"
    },
    "subsets": {
        title: "Subsets"
    },
    "house-robber": {
        title: "House Robber"
    },
    "coin-change": {
        title: "Coin Change"
    },
    "dp-basics": {
        title: "DP - Basics"
    },
    "no-of-islands": {
        title: "Number of Islands"
    },
    "edit-distance": {
        title: "Edit Distance"
    },
    "tree-rightside": {
        title: "Binary Tree Rightside View"
    },
    "word-break-ii": {
        title: "Word-Break II"
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
    "stack-basics": {
        title: "Stack Basics"
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
    "redundant-connections": {
        title: "Redundant Connections"
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
    "counting-bits": {
        title: "Counting Bits"
    },
    "trapping-rain-water": {
        title: "Trapping Rain Water"
    },
    "best-sightseeing-pair": {
        title: "Best Sightseeing Pair"
    },
    "graph-basics": {
        title: "Basics"
    },
    "the-maze-ii": {
        title: "The Maze II"
    },
    "course-schedule": {
        title: "Course Schedule"
    },
    "interesting-problems": {
        title: "Interesting Problems"
    }
};