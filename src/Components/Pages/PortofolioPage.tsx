import { useMemo, useState } from "react";
import HeroPortofolio from "./Portofolio/HeroPortofolio";
import FilterTabs from "./Portofolio/FilterTabs";
import PortfolioGrid from "./Portofolio/PortofolioGrid";
import Pagination from "./Portofolio/Pagination";
import { categories, PORTFOLIO_ITEMS } from "./Portofolio/DataDummy";

const ITEMS_PER_PAGE = 6;

export default function PortofolioPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredItems = useMemo(
        () => PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory),
        [activeCategory]
    );

    const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

    const pagedItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredItems.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredItems, currentPage]);

    function handleCategoryChange(id: string) {
        setActiveCategory(id);
        setCurrentPage(1); // reset ke halaman 1 tiap ganti kategori
    }

    return (
        <div className="px-6 py-6">
            <HeroPortofolio />

            <FilterTabs
                categories={categories}
                activeCategory={activeCategory}
                onChange={handleCategoryChange}
            />

            <PortfolioGrid items={pagedItems} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}