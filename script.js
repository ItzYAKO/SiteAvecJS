// Sélection du bouton et du body
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Vérifie le mode actuel depuis le stockage local
const currentMode = localStorage.getItem('theme');
if (currentMode) {
    body.classList.add(currentMode);
}

// Écouteur d'événement pour le bouton
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});
