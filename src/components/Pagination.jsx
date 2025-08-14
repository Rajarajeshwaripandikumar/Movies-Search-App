const Pagination = ({ totalResults, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / 10);
    
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-4 my-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-yellow-500 text-black px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            <span className="text-lg">Page {currentPage} of {totalPages}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-yellow-500 text-black px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;