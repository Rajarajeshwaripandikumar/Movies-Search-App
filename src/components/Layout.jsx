import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen bg-black text-gray-100">
            <header className="container mx-auto p-4 flex justify-between items-center border-b border-gray-700">
                <Link to="/" className="text-4xl font-bold text-yellow-400">
                    Movie Search
                </Link>
                <nav>
                    <Link to="/favorites" className="text-lg font-semibold transition-colors duration-300 hover:text-yellow-400">
                        My Favorites
                    </Link>
                </nav>
            </header>
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;