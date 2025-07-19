document.addEventListener('DOMContentLoaded', async () => {
    // Fetch the member data from the JSON file
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Function to generate member cards
    function displayMembers(members) {
        const memberContainer = document.getElementById('members');
        memberContainer.innerHTML = ''; // Clear the container before rendering

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" class="member-image">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${['Member', 'Silver', 'Gold'][member.membershipLevel - 1]}</p>
        <p><strong>Info:</strong> ${member.additionalInfo}</p>
      `;
            memberContainer.appendChild(memberCard);
        });
    }

    // Initial render of members in grid view
    displayMembers(members);

    // Toggle between grid and list view
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    // Grid view button click event
    gridViewButton.addEventListener('click', () => {
        const memberContainer = document.getElementById('members');
        memberContainer.classList.add('grid-view');
        memberContainer.classList.remove('list-view');
    });

    // List view button click event
    listViewButton.addEventListener('click', () => {
        const memberContainer = document.getElementById('members');
        memberContainer.classList.add('list-view');
        memberContainer.classList.remove('grid-view');
    });

    // Set the current year and last modified date in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();
});
