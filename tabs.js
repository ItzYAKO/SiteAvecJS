// Sélectionne tous les onglets (li)
const tabs = document.querySelectorAll('.tab');

// Sélectionne tout le contenu (div)
const contents = document.querySelectorAll('.content');

// Ajoute un événement click à chaque onglet
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Supprime la classe "tab-active" de tous les onglets
        tabs.forEach(t => t.classList.remove('tab-active'));

        // Supprime la classe "active" de tout le contenu
        contents.forEach(content => content.classList.remove('active'));

        // Ajoute la classe "tab-active" à l'onglet cliqué
        this.classList.add('tab-active');

        // Vérifie quelle classe spécifique est attachée à l'onglet cliqué
        if (this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active');
        }
    });
});