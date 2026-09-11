interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="w-full flex flex-row items-center justify-center gap-2 mt-10 mb-16">
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border-2 border-black font-bold disabled:opacity-30 disabled:cursor-not-allowed"
            >
                {"<"}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 border-2 border-black font-bold transition-all ${
                        page === currentPage
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                >
                    {page}
                </button>
            ))}

            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border-2 border-black font-bold disabled:opacity-30 disabled:cursor-not-allowed"
            >
                {">"}
            </button>
        </div>
    );
}