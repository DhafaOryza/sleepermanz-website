interface Category {
    id: string;
    label: string;
}

interface FilterTabsProps {
    categories: Category[];
    activeCategory: string;
    onChange: (id: string) => void;
}

export default function FilterTabs({ categories, activeCategory, onChange }: FilterTabsProps) {
    return (
        <div className="flex flex-row flex-wrap items-center gap-4 mt-8 justify-center">
            {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => onChange(cat.id)}
                        className={`border border-r-[3px] border-b-[3px] border-black px-5 py-2 text-sm font-semibold uppercase transition-all ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        {cat.label}
                    </button>
                );
            })}
        </div>
    );
}