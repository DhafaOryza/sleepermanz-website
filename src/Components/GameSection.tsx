/*
    ——————————— Color Sample ———————————
    #34A853 - PlayStore
    #154478 - Steam
    #FA5C5C - Itch Io
*/


import Barier from "./etc/Barier";
import GameCard from "./etc/GameCard";

const games: React.ComponentProps<typeof GameCard>[] = [
    {
        coverUrl: "",
        thumbnailUrls: [
            "",
            "",
            "",
        ],
        title: "Block Flow",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet venenatis convallis et eget fringilla convallis.",
        tags: "3.0.6 GAME, RESTAURANT, CUTE",
        store: "playstore",
        statusColor: "#34A853",
        href: "#",
        border: [2, 2, 6, 6]
    },
    {
        coverUrl: "",
        thumbnailUrls: [
            "",
            "",
            "",
        ],
        title: "Feather Rogue",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet venenatis convallis et eget fringilla convallis.",
        tags: "3.0.6 GAME, RESTAURANT, CUTE",
        store: "steam",
        statusColor: "#154478",
        href: "#",
        border: [2, 2, 6, 6]
    },
    {
        coverUrl: "",
        thumbnailUrls: [
            "",
            "",
            "",
        ],
        title: "Let's Open",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet venenatis convallis et eget fringilla convallis.",
        tags: "3.0.6 GAME, RESTAURANT, CUTE",
        store: "itch",
        statusColor: "#FA5C5C",
        href: "#",
        border: [2, 2, 6, 6]
    },
    {
        coverUrl: "",
        thumbnailUrls: [
            "",
            "",
            "",
        ],
        title: "Last Hope: Emily",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet venenatis convallis et eget fringilla convallis.",
        tags: "3.0.6 GAME, RESTAURANT, CUTE",
        store: "",
        statusColor: "",
        href: "#",
        border: [2, 2, 6, 6]
    },
    {
        coverUrl: "",
        thumbnailUrls: [
            "",
            "",
            "",
        ],
        title: "Hand Royal",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet venenatis convallis et eget fringilla convallis.",
        tags: "3.0.6 GAME, RESTAURANT, CUTE",
        store: "itch",
        statusColor: "#FA5C5C",
        href: "#",
        border: [2, 2, 6, 6]
    }
];

export default function Game() {
    return (
        <div className="w-full flex flex-col items-center px-6 mt-16">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-8">
                <h1 className="text-8xl font-black uppercase">Game</h1>
                <Barier width="full" height="2" className="flex-1" />
            </div>

            {/* Grid Game */}
            <div className="w-full grid grid-cols-3 gap-8 mt-10">
                {games.map((game) => (
                    <GameCard key={game.title} {...game} />
                ))}
            </div>
        </div>
    );
}
