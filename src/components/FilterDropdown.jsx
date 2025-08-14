const FilterDropdown = ({ onFilterChange, selectedType }) => {
    return (
        <select
            value={selectedType}
            onChange={(e) => onFilterChange(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
            <option value="">All Types</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
        </select>
    );
};

export default FilterDropdown;