const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query, page = 1, type = '') => {
    try {
        const response = await fetch(`${API_URL}&s=${query}&page=${page}&type=${type}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return { Response: 'False', Error: 'Network error or server down.' };
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${API_URL}&i=${id}&plot=full`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return { Response: 'False', Error: 'Network error or server down.' };
    }
};