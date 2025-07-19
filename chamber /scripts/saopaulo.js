document.addEventListener('DOMContentLoaded', async () => {
    // Fetch the member data from the JSON file
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Function to render member cards
    function renderMembers(members) {
        const membersContainer = document.getElementById('members');
        membersContainer.innerHTML = ''; // Clear any existing content

        members.forEach(member => {
            const memberSection = document.createElement('section');
            memberSection.classList.add('member-card'); // Add a class for styling

            memberSection.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.additionalInfo}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberSection);
        });
    }

    // Initially render members in grid view
    renderMembers(members);

    // Toggle between grid and list view
    const gridViewButton = document.getElementById('grid');
    const listViewButton = document.getElementById('list');
    const membersContainer = document.getElementById('members');

    gridViewButton.addEventListener('click', () => {
        membersContainer.classList.add('grid');
        membersContainer.classList.remove('list');
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.classList.add('list');
        membersContainer.classList.remove('grid');
    });

    // Set the current year and last modified date in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navMenu = document.getElementById('navMenu');

    // Quando o botão do menu for clicado, alternamos a visibilidade do menu
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open'); // Alterna a classe 'open'
    });
});
