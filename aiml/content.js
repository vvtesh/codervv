// ====================================================================
// --- CONTENT DATA ---
// ====================================================================

// A) NAVIGATION MAP (Defines the menu hierarchy: Category Title -> Page IDs)
//CategoryIds must be unique. Else, a popup will appear to fix it.
const menuStructure = [
    {
        categoryTitle: "Getting Started",
        categoryId: "getting-started",
        pageIds: ["overview", "seq-modeling", "activation-fn", "embedding"]
    },
    {
        categoryTitle: "Concepts",
        categoryId: "concepts",
        pageIds: ["transformers"]
    }
];

// B) PAGE METADATA (Holds titles. Content is now in separate files in the /content/ directory)
const pageContent = {
    "overview": {
        title: "Overview"
    },
    "activation-fn": {
        title: "Activation Functions"
    },
    "seq-modeling": {
        title: "Sequence Modeling"
    },
    "embedding": {
        title: "Embedding"
    },
    "transformers": {
        title: "Transformers"
    }
};