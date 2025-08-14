import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="movie/:id" element={<MovieDetailsPage />} />
                    <Route path="favorites" element={<FavoritesPage />} /> {/* This route maps the URL to the component */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;