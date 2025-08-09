// scripts/suggestion.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.suggestion-form');
    const listEl = document.querySelector('#suggestion-list ul');

    // Submit handler for the suggestion form
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('movie-title').value.trim();
            const genre = document.getElementById('genre').value;
            const why = document.getElementById('why').value.trim();

            if (!title || !genre || !why) {
                alert("Please fill out all fields.");
                return;
            }

            const suggestion = {
                title,
                genre,
                why,
                timestamp: new Date().toISOString()
            };

            // Store suggestion in localStorage
            const stored = JSON.parse(localStorage.getItem('movieSuggestions')) || [];
            stored.push(suggestion);
            localStorage.setItem('movieSuggestions', JSON.stringify(stored));

            alert(`Thanks for your suggestion of "${title}"!`);
            form.reset();
        });
    }

    // Load and display suggestions if on the page that has the list
    if (listEl) {
        const stored = JSON.parse(localStorage.getItem('movieSuggestions')) || [];

        if (stored.length === 0) {
            listEl.innerHTML = '<li>No suggestions yet. Be the first to add one!</li>';
        } else {
            stored.forEach((s) => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${s.title}</strong> (${s.genre}) – ${s.why}`;
                listEl.appendChild(li);
            });
        }
    }
});
