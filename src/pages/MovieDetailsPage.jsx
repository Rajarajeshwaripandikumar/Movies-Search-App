import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/omdbService';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            const data = await getMovieDetails(id);
            setLoading(false);

            if (data.Response === 'True') {
                setMovie(data);
            } else {
                setError(data.Error);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) {
        return <p className="text-center text-lg">Loading movie details...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 text-lg">Error: {error}</p>;
    }

    if (!movie) {
        return <p className="text-center text-lg">Movie not found.</p>;
    }

    const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';

    return (
        <div className="p-4 sm:p-8">
            <Link to="/" className="text-yellow-500 hover:underline mb-4 inline-block">&larr; Back to Search</Link>
            <div className="flex flex-col md:flex-row gap-8 bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="flex-shrink-0">
                    <img src={posterUrl} alt={movie.Title} className="w-full md:w-80 h-auto rounded-lg shadow-md" />
                </div>
                <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-2">{movie.Title} ({movie.Year})</h2>
                    <p className="text-gray-400 mb-4">{movie.Genre}</p>
                    <p className="text-lg mb-4">{movie.Plot}</p>
                    <div className="space-y-2 text-gray-300">
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Writer:</strong> {movie.Writer}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>IMDB Rating:</strong> {movie.imdbRating} / 10</p>
                        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
                        <p><strong>Language:</strong> {movie.Language}</p>
                        <p><strong>Country:</strong> {movie.Country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;