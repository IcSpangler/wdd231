let movies = []; // global array to hold movie data

async function fetchMovies() {
  try {
    const response = await fetch('data/movies.json');
    if (!response.ok) throw new Error('Network error fetching movies');
    movies = await response.json();

    const container = document.querySelector('#movies-container');
    container.innerHTML = '';

    movies.slice(0, 15).forEach(movie => {
      container.innerHTML += `
        <article class="movie-card">
          <h3>${movie.title}</h3>
          <p>Genre: ${movie.genre}</p>
          <p>Year: ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
          <button class="details-btn" data-movie-id="${movie.id}">Details</button>
        </article>
      `;
    });
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies(); // Load and render movies on page load

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalCloseBtn = document.getElementById('modal-close');

  // Open modal when a details button is clicked (event delegation)
  document.querySelector('#movies-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
      const movieId = e.target.dataset.movieId;
      // Convert movieId to Number if your IDs are numeric in JSON
      const movie = movies.find(m => m.id === Number(movieId));

      if (movie) {
        modalTitle.textContent = movie.title;
        modalDesc.textContent = movie.description || 'No description available.';
        modal.hidden = false;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        modalCloseBtn.focus(); // Optional: focus close button for accessibility
      }
    }
  });

  // Close modal when close button clicked
  modalCloseBtn.addEventListener('click', () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside modal content (on overlay)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });
});
