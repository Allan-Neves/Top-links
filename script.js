const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Armazene a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Verifique a preferência do usuário e aplique-a
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}
