import type { ServiceCardData } from "./ServiceCard";

export const gameArtServices: ServiceCardData[] = [
    {
        title: "Character Design",
        description:
            "Designing distinctive characters that fit your game's visual identity, personality, and world.",
        images: [null, null, null, null],
        includes: ["Main Characters", "NPCs", "Enemies & Creatures", "Outfit & Equipment Variations", "Expression & Pose Sheets", "Character Turnarounds"],
    },
    {
        title: "Character Art",
        description:
            "Creating polished, production-ready character artwork from concept to final game assets.",
        images: [null, null, null, null],
        includes: ["Character Rendering", "Sprite / Game Assets", "Character Variations", "Promotional Character Art", "In-game Character Assets"],
    },
    {
        title: "Environment Art",
        description:
            "Building expressive environments that establish the atmosphere and visual identity of your game world.",
        images: [null, null, null, null],
        includes: ["Backgrounds", "Locations & Scenes", "Props", "Buildings & Structures", "Environmental Assets", "Tilesets"],
    },
    {
        title: "UI Art",
        description:
            "Designing game interfaces that communicate information clearly while fitting the game's visual identity.",
        images: [null, null, null, null],
        includes: ["HUD", "Menus", "Inventory", "Character Screens", "Shop Interfaces", "UI Icons"],
    },
    {
        title: "Illustration & Key Art",
        description:
            "Creating polished artwork for game presentation, promotion, and visual storytelling.",
        images: [null, null, null, null, null, null],
        includes: ["Key Art", "Splash Art", "Promotional Artwork", "Loading Screens", "Character Illustration", "Store & Social Media Assets"],
    },
];

export const animationServices: ServiceCardData[] = [
    {
        title: "Animation",
        description:
            "Bringing characters to life through expressive animation designed for gameplay and personality.",
        images: [null, null, null, null],
        includes: ["Idle", "Movement", "Attack", "Skill / Ability", "Hit Reaction", "Emotes", "Death Animation"],
    },
    {
        title: "Spine Animation",
        description:
            "Creating flexible 2D rigs and animation systems for efficient, reusable character animation.",
        images: [null, null, null],
        layout: "featured-left",
        includes: ["Bone Rigging", "Skin Setup", "Mesh & Weighting", "IK Setup", "Animation Setup", "Skin Variations", "Unity Integration"],
    },
];

export const gameDevServices: ServiceCardData[] = [
    {
        title: "Gameplay Programming",
        description: "Turning game mechanics and designs into responsive, playable gameplay.",
        images: [null],
        includes: ["Player Controllers", "Combat", "Enemy Behaviors", "Interaction Systems", "Input Systems", "Gameplay Logic"],
    },
    {
        title: "Game Systems",
        description:
            "Building the systems that support progression, interaction, and the overall game loop.",
        images: [null],
        includes: ["Inventory", "Progression", "Economy", "Quest Systems", "Save Systems", "Data Management"],
    },
];