const button = document.querySelector('.back-link');

button.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});
