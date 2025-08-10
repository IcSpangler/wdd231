const dataUrl = "data/discover.json";
const container = document.querySelector("#discover-container");

// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

async function loadDiscoverCards() {
    try {
        const response = await fetch(dataUrl);
        const places = await response.json();

        places.forEach(place => {
            const card = document.createElement("section");
            card.classList.add("discover-card");

            const title = document.createElement("h2");
            title.textContent = place.name;

            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = place.image;
            img.alt = place.name;
            img.loading = "lazy";
            figure.appendChild(img);

            const address = document.createElement("address");
            address.textContent = place.address;

            const description = document.createElement("p");
            description.textContent = place.description;

            const button = document.createElement("button");
            button.textContent = "Learn More";
            button.addEventListener("click", () => {
                modalTitle.textContent = place.name;
                modalDescription.textContent = place.description;
                modal.hidden = false;
            });

            card.appendChild(title);
            card.appendChild(figure);
            card.appendChild(address);
            card.appendChild(description);
            card.appendChild(button);

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading discover data:", error);
    }
}

// Fecha a modal quando clicar no botão fechar
modalClose.addEventListener("click", () => {
    modal.hidden = true;
});

// Fecha a modal se clicar fora do conteúdo
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.hidden = true;
    }
});

loadDiscoverCards();


function displayLastVisit() {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysDiff < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }
    localStorage.setItem("lastVisit", now);
}

displayLastVisit();
loadDiscoverCards();
