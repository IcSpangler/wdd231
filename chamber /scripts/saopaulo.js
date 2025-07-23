const response = await fetch('data/members.json');
const members = await response.json();

    // FUNCTION TO RENDER MEMBER CARDS
    function renderMembers(members) {
        const membersContainer = document.getElementById('members');
        membersContainer.innerHTML = '';

        members.forEach(member => {
            const memberSection = document.createElement('section');
            memberSection.classList.add('member-card');

            memberSection.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.additionalInfo}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberSection);
        });
    }

    renderMembers(members); // INITIAL RENDER

    // TOGGLE VIEW BUTTONS
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
