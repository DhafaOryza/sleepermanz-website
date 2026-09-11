import type { PortfolioItem } from "./PortofolioGrid";

export interface Category {
    id: string;
    label: string;
}

export const categories: Category[] = [
    { id: "concept-art", label: "Concept Art" },
    { id: "3d-modeling", label: "3D Modeling" },
    { id: "ui-ux", label: "UI / UX Design" },
    { id: "animations", label: "Animations" },
];

// TODO: ganti dengan data asli (dari CMS/API/array assets), ini cuma contoh biar pagination-nya kelihatan jalan
export const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 9 }, (_, i) => ({
    id: `concept-art-${i + 1}`,
    category: "concept-art",
    title: `Concept Art ${i + 1}`,
    image: null,
})).concat(
    Array.from({ length: 5 }, (_, i) => ({
        id: `3d-modeling-${i + 1}`,
        category: "3d-modeling",
        title: `3D Modeling ${i + 1}`,
        image: null,
    })),
    Array.from({ length: 5 }, (_, i) => ({
        id: `ui-ux-${i + 1}`,
        category: "ui-ux",
        title: `UI / UX Design ${i + 1}`,
        image: null,
    })),
    Array.from({ length: 5 }, (_, i) => ({
        id: `animations-${i + 1}`,
        category: "animations",
        title: `Animation ${i + 1}`,
        image: null,
    }))
);