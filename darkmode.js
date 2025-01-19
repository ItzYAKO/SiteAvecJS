// Sélection du bouton et du body
let Darkmode = document.getElementById('DarkModeToggle');
let body= document.body;

Darkmode.addEventListener("click", function() {

//Si le lightmode est actif l'enleve puis ajoute le dark mode et inversement
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode')
        body.classList.add('darkmode')
    } else { 
        body.classList.remove('darkmode')
        body.classList.add('lightmode')
    }
    });

