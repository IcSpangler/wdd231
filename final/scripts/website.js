document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Load saved email from localStorage and pre-fill input
    const savedEmail = localStorage.getItem('savedEmail');
    const emailInput = document.querySelector("#signup-form input[type='email']");
    if (savedEmail && emailInput) {
        emailInput.value = savedEmail;
    }
});

// MOVIE SUGGESTION FORM 
const suggestionForm = document.querySelector(".suggestion-form");

if (suggestionForm) {
    suggestionForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // Get form values
        const movieTitle = document.getElementById("movie-title").value.trim();
        const genre = document.getElementById("genre").value;
        const why = document.getElementById("why").value.trim();

        if (!movieTitle || !genre || !why) {
            alert("Please fill in all fields before submitting.");
            return;
        }

   
        alert(`🎬 Thank you for suggesting "${movieTitle}" in the ${genre} category! We appreciate your recommendation.`);

      
        suggestionForm.reset();
    });
}

//  EMAIL SIGNUP FORM 
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

        // Save email to localStorage
        localStorage.setItem('savedEmail', email);

        alert(`✅ Thank you for signing up, ${email}! You will now receive movie recommendations in your inbox.`);
        signupForm.reset();
    });
}
