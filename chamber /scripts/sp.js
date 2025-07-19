document.addEventListener('DOMContentLoaded', async () => {
    // Fetch member data from JSON
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Display members in the appropriate view
    function displayMembers(members) {
        const membersContainer = document.getElementById('members');
        membersContainer.innerHTML = ''; // Clear the container before rendering

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${['Member', 'Silver', 'Gold'][member.membershipLevel - 1]}</p>
                <p><strong>Info:</strong> ${member.additionalInfo}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    // Initially display members in grid view
    displayMembers(members);

    // Toggle between grid and list view
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const membersContainer = document.getElementById('members');

    gridViewButton.addEventListener('click', () => {
        membersContainer.classList.add('grid-view');
        membersContainer.classList.remove('list-view');
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.classList.add('list-view');
        membersContainer.classList.remove('grid-view');
    });

    // Set the current year and last modified date in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();
});
