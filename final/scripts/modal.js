const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCloseBtn = document.getElementById('modal-close');

export function openModal(title, description) {
    modalTitle.textContent = title;
    modalDesc.textContent = description || 'No description available.';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
}

export function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
}

export function setupModalListeners() {
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
}
