import { Link } from 'react-router-dom';
import useFavourites from '../hooks/useFavourites';

const MovieCard = ({ movie }) => {
    const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';

    const { addFavorite, removeFavorite, isFavorite } = useFavourites();
    const favoriteStatus = isFavorite(movie);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (favoriteStatus) {
            removeFavorite(movie);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <div className="glass-morphism rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={posterUrl} alt={movie.Title} className="w-full h-96 object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-xl font-bold truncate text-white">{movie.Title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{movie.Year}</p>
                </div>
            </Link>
            <button
                onClick={handleFavoriteClick}
                className={`absolute top-2 right-2 p-2 rounded-full transition-colors transform group-hover:scale-110 duration-200
                    ${favoriteStatus ? 'bg-red-600 text-white' : 'bg-white bg-opacity-20 text-white hover:bg-red-600'}`}
                title={favoriteStatus ? 'Remove from favorites' : 'Add to favorites'}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        d="m11.645 20.917-7.893-7.893a4.5 4.5 0 0 1 0-6.364l7.893-7.893a4.5 4.5 0 0 1 6.364 0l7.893 7.893a4.5 4.5 0 0 1 0 6.364l-7.893 7.893a4.5 4.5 0 0 1-6.364 0Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill={favoriteStatus ? 'currentColor' : 'none'}
                    />
                </svg>
            </button>
        </div>
    );
};

export default MovieCard;