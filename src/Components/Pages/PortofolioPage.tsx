import { useMemo, useState } from "react";
import HeroPortofolio from "./Portofolio/HeroPortofolio";
import FilterTabs from "./Portofolio/FilterTabs";
import PortfolioGrid from "./Portofolio/PortofolioGrid";
// import Pagination from "./Portofolio/Pagination";
import { categories, PORTFOLIO_ITEMS } from "./Portofolio/DataDummy";

export default function PortofolioPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);

    const filteredItems = useMemo(
        () => PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory),
        [activeCategory]
    );

    return (
        <div className="px-6 py-6">
            <HeroPortofolio />

            <FilterTabs
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
            />

            <PortfolioGrid items={filteredItems} />

            {/*<Pagination*/}
            {/*    currentPage={currentPage}*/}
            {/*    totalPages={totalPages}*/}
            {/*    onPageChange={setCurrentPage}*/}
            {/*/>*/}
        </div>
    );
}