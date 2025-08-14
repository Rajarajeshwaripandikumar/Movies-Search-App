# Movies Search App
🎬
A full-featured **React** application that integrates with the **OMDB API** to search for movies, view detailed information, and manage a list of favorites.

---

## Features

- **Search Movies:** Enter movie titles or keywords to fetch results from OMDB API.
- **Movie Details:** View detailed information including poster, title, release year, genre, plot, ratings, cast, and director.
- **Pagination:** Navigate large sets of search results using Previous/Next buttons.
- **Type Filter:** Filter movies by type (`Movie`, `Series`, `Episode`) using the API.
- **Favorites Management:** Add or remove movies from favorites, stored in browser `localStorage`.
- **Responsive Design:** Works on desktop and mobile screens.
- **Error Handling:** Displays friendly messages when API errors occur or no results are found.
- **Routing:** Implemented with React Router v6.

---

## Tech Stack

- **Frontend:** ReactJS, React Router
- **Styling:** Tailwind CSS, HTML/CSS
- **API:** OMDB API
- **Functionality:** JavaScript

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone [https://github.com/Rajarajeshwaripandikumar/Movies-Search-App.git]
npm install

Configure OMDB API Key

Create a .env file in the root:

VITE_OMDB_API_KEY=your_omdb_api_key

npm start
