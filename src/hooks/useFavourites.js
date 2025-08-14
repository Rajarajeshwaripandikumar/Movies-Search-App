import { useState, useEffect } from 'react';

const useFavourites = () => {
    // Initialize state from localStorage or an empty array
    const [favourites, setFavourites] = useState(() => {
        const storedFavourites = localStorage.getItem('omdb-favourites');
        return storedFavourites ? JSON.parse(storedFavourites) : [];
    });

    // Save favorites to localStorage whenever the list changes
    useEffect(() => {
        localStorage.setItem('omdb-favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavorite = (movie) => {
        // Prevent adding duplicates
        if (!favourites.some(fav => fav.imdbID === movie.imdbID)) {
            setFavourites(prevFavourites => [...prevFavourites, movie]);
        }
    };

    const removeFavorite = (movie) => {
        setFavourites(prevFavourites => prevFavourites.filter(
            fav => fav.imdbID !== movie.imdbID
        ));
    };

    const isFavorite = (movie) => {
        return favourites.some(fav => fav.imdbID === movie.imdbID);
    };

    return {
        favourites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };
};

export default useFavourites;