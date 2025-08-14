import useFavourites from '../hooks/useFavourites';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
    const { favourites } = useFavourites();

    return (
        <div className="min-h-screen">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Your Favorite Movies</h2>
            
            {favourites.length === 0 ? (
                <p className="text-center text-lg text-gray-400">You haven't added any movies to your favorites yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favourites.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;