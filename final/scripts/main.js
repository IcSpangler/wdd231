import { fetchMovies } from './fetchMovies.js';
import { loadFavorites, isFavorite, toggleFavorite } from './favorites.js';
import { openModal, setupModalListeners } from './modal.js';

let movies = [];

async function renderMovies() {
    movies = await fetchMovies();
    loadFavorites();

    const container = document.querySelector('#movies-container');
    container.innerHTML = '';

    movies.slice(0, 15).forEach(movie => {
        const favText = isFavorite(movie.id) ? 'Unfavorite' : 'Favorite';

        container.innerHTML += `
      <article class="movie-card">
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
        <p>Year: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <button class="details-btn" data-movie-id="${movie.id}">Details</button>
        <button class="fav-btn" data-movie-id="${movie.id}">${favText}</button>
      </article>
    `;
    });
}

function setupEventListeners() {
    const container = document.querySelector('#movies-container');

    container.addEventListener('click', (e) => {
        const movieId = Number(e.target.dataset.movieId);
        if (e.target.classList.contains('details-btn')) {
            const movie = movies.find(m => m.id === movieId);
            if (movie) openModal(movie.title, movie.description);
        } else if (e.target.classList.contains('fav-btn')) {
            toggleFavorite(movieId);
            renderMovies(); // re-render para atualizar botões
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    setupEventListeners();
    setupModalListeners();
});
