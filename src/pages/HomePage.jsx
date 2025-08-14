import { useState, useEffect } from 'react';
import { searchMovies } from '../services/omdbService';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import FilterDropdown from '../components/FilterDropdown';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('batman'); // Default search query
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!query) return;

            setLoading(true);
            setError('');
            const data = await searchMovies(query, currentPage, type);
            setLoading(false);

            if (data.Response === 'True') {
                setMovies(data.Search);
                setTotalResults(parseInt(data.totalResults, 10));
            } else {
                setMovies([]);
                setTotalResults(0);
                setError(data.Error);
            }
        };

        fetchMovies();
    }, [query, currentPage, type]);

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleTypeChange = (newType) => {
        setType(newType);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen">
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-center">
                <SearchBar onSearch={handleSearch} />
                <FilterDropdown onFilterChange={handleTypeChange} selectedType={type} />
            </div>

            {loading && <p className="text-center text-lg">Loading movies...</p>}
            {error && <p className="text-center text-red-500 text-lg">{error}</p>}
            {!loading && !error && movies.length === 0 && query && (
                <p className="text-center text-lg">No movies found. Try another search!</p>
            )}

            {!loading && movies.length > 0 && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                    <Pagination
                        totalResults={totalResults}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
};

export default HomePage;