const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified.toLocaleString();