export interface PortfolioItem {
    id: string;
    category: string;
    title: string;
    image: string | null;
}

interface PortfolioGridProps {
    items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
    if (items.length === 0) {
        return (
            <p className="w-full text-center text-gray-500 mt-16">
                Belum ada item di kategori ini.
            </p>
        );
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4 mt-10">
            {items.map((item) =>
                item.image ? (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full aspect-video object-cover bg-gray-200 border-2 border-black"
                    />
                ) : (
                    <div
                        key={item.id}
                        className="w-full aspect-video bg-gray-200 border-2 border-black"
                    />
                )
            )}
        </div>
    );
}