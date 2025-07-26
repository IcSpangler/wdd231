const perksDiv = document.getElementById('perks');

document.querySelectorAll('input[name="level"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        let perks = '';
        switch (e.target.value) {
            case '1':
                perks = '<ul><li>Directory listing</li><li>Newsletter access</li></ul>';
                break;
            case '2':
                perks = '<ul><li>All non‑profit perks</li><li>Social media promotion</li></ul>';
                break;
            case '3':
                perks = '<ul><li>All silver perks</li><li>Event sponsorship</li><li>Featured ads</li></ul>';
                break;
            default:
                perks = '';
        }
        perksDiv.innerHTML = perks;
    });
});

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Optional: Close modal when clicking outside
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


const form = document.getElementById('membershipForm');
const thankYouMsg = document.getElementById('thankyou-message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // evita o envio tradicional

    // Aqui você pode validar/usar os dados, enviar via fetch/AJAX, salvar localStorage etc.

    // Oculta o formulário
    form.style.display = 'none';

    // Mostra a mensagem de obrigado
    thankYouMsg.style.display = 'block';
});
