async function getMemberData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displaySpotlights(data);
}

function displaySpotlights(members) {
    const container = document.getElementById('spotlight-cards');

    // Filter gold (3) and silver (2) members
    const eligible = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);

    // Shuffle array
    eligible.sort(() => 0.5 - Math.random());

    // Pick 2–3 random spotlights
    const count = Math.floor(Math.random() * 2) + 2;
    const selected = eligible.slice(0, count);

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="${member.image || 'images/default-logo.jpg'}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Membership:</strong> ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

getMemberData();
