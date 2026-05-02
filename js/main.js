const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '404.html';
    });
});
