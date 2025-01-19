// Sélection du bouton et du body
let Darkmode = document.getElementById('DarkModeToggle');
let body= document.body;

Darkmode.addEventListener("click", function() {
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode')
        body.classList.add('darkmode')
    } else { 
        body.classList.remove('darkmode')
        body.classList.add('lightmode')
    }
    });

