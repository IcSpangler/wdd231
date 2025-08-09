let movies = [];
let favorites = [];

function saveFavorites() {
  localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
}

function loadFavorites() {
  const fav = localStorage.getItem('favoriteMovies');
  if (fav) {
    favorites = JSON.parse(fav);
  }
}

async function fetchMovies() {
  try {
    const response = await fetch('data/movies.json');
    if (!response.ok) throw new Error('Network error fetching movies');
    movies = await response.json();

    loadFavorites();

    const container = document.querySelector('#movies-container');
    container.innerHTML = '';

    movies.slice(0, 15).forEach(movie => {
      const isFav = favorites.includes(movie.id);
      container.innerHTML += `
        <article class="movie-card">
          <h3>${movie.title}</h3>
          <p>Genre: ${movie.genre}</p>
          <p>Year: ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
          <button class="details-btn" data-movie-id="${movie.id}">Details</button>
          <button class="fav-btn" data-movie-id="${movie.id}">
            ${isFav ? 'Unfavorite' : 'Favorite'}
          </button>
        </article>
      `;
    });
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies();

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalCloseBtn = document.getElementById('modal-close');

  document.querySelector('#movies-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
      const movieId = Number(e.target.dataset.movieId);
      const movie = movies.find(m => m.id === movieId);

      if (movie) {
        modalTitle.textContent = movie.title;
        modalDesc.textContent = movie.description || 'No description available.';
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        modalCloseBtn.focus();
      }
    } else if (e.target.classList.contains('fav-btn')) {
      const movieId = Number(e.target.dataset.movieId);

      if (favorites.includes(movieId)) {
        favorites = favorites.filter(id => id !== movieId);
        e.target.textContent = 'Favorite';
      } else {
        favorites.push(movieId);
        e.target.textContent = 'Unfavorite';
      }
      saveFavorites();
    }
  });

  modalCloseBtn.addEventListener('click', () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });
});
