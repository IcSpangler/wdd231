// Toggle between grid and list views
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');
const membersContainer = document.getElementById('members');

gridViewBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listViewBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

// Fetch member data from JSON
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('section');
        card.innerHTML = `
      <img src="images/${member.image}" alt="Logo of ${member.name}">
      <h3>${member.name}</h3>
      <p><strong>${member.description}</strong></p>
      <p>📍 ${member.address}</p>
      <p>📞 ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">🌐 Visit Website</a></p>
    `;
        membersContainer.appendChild(card);
    });
}

// Footer script for copyright and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetchMembers();
