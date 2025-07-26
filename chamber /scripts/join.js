document.addEventListener('DOMContentLoaded', () => {
    // Funções para abrir e fechar modais
    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'block';
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    }

    // Fecha modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Fecha modal ao clicar no botão fechar (x)
    document.querySelectorAll('.modal .close').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });

    // Mapeia nome do membership para id do modal
    const idMap = {
        'NP Membership': 'np-modal',
        'Bronze Membership': 'bronze-modal',
        'Silver Membership': 'silver-modal',
        'Gold Membership': 'gold-modal'
    };

    // Adiciona evento de clique nos cards para abrir modal correto
    document.querySelectorAll('.membership-section .card').forEach(card => {
        card.addEventListener('click', () => {
            const membershipName = card.querySelector('h3').textContent.trim();
            const modalId = idMap[membershipName];
            if (modalId) openModal(modalId);
        });
    });

    // Controle do formulário
    const form = document.getElementById('membershipForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // bloqueia envio tradicional
            // Você pode adicionar aqui validações adicionais se quiser

            // Aqui só redireciona para a página de agradecimento
            window.location.href = "thankyou.html";
        });
    }

    // Atualiza timestamp oculto
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});
