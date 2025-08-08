// website.js

// ====== FOOTER YEAR AND LAST MODIFIED ======
document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }
});

// ====== MOVIE SUGGESTION FORM ======
const suggestionForm = document.querySelector(".suggestion-form");

if (suggestionForm) {
    suggestionForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page refresh

        // Get form values
        const movieTitle = document.getElementById("movie-title").value.trim();
        const genre = document.getElementById("genre").value;
        const why = document.getElementById("why").value.trim();

        if (!movieTitle || !genre || !why) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Show success message
        alert(`🎬 Thank you for suggesting "${movieTitle}" in the ${genre} category! We appreciate your recommendation.`);

        // Clear the form
        suggestionForm.reset();
    });
}

// ====== EMAIL SIGNUP FORM ======
const signupForm = document.getElementById("signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = signupForm.querySelector("input[type='email']");
        const email = emailInput.value.trim();

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        alert(`✅ Thank you for signing up, ${email}! You will now receive movie recommendations in your inbox.`);
        signupForm.reset();
    });
}
async function fetchMovies() {
    try {
        const response = await fetch('data/movies.json');
        if (!response.ok) throw new Error('Network error');
        const movies = await response.json();

        const container = document.querySelector('#movies-container');
        container.innerHTML = '';

        movies.slice(0, 15).forEach(movie => {
            container.innerHTML += `
        <article class="movie-card">
          <h3>${movie.title}</h3>
          <p>Genre: ${movie.genre}</p>
          <p>Year: ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
        </article>
      `;
        });
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

fetchMovies();
