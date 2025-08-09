document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("suggestion-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent actual form submission

        const movie = document.getElementById("movie").value;
        localStorage.setItem("suggestedMovie", movie); // save to localStorage

        message.textContent = `Thanks! Your suggestion "${movie}" has been saved.`;
        form.reset(); // clear the form
    });
});
