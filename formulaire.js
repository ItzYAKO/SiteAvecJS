document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour le test

    // Récupération des champs
    let pseudo = document.getElementById('pseudo');
    let password = document.getElementById('password');
    let verifyPassword = document.getElementById('verifyPassword');
    let question = document.querySelector('input[name="question"]:checked');
    let email = document.getElementById('email');

    // Réinitialisation des styles
    pseudo.classList.remove('valid', 'invalid');
    email.classList.remove('valid', 'invalid');
    password.classList.remove('valid', 'invalid');
    verifyPassword.classList.remove('valid', 'invalid');
    question && question.classList.remove('valid', 'invalid'); // Si une réponse est sélectionnée

    let valid = true;

    // Validation du pseudo
    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalid');
        valid = false;
    } else {
        pseudo.classList.add('valid');
    }

    // Validation de l'email
    let emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailCheck.test(email.value)) {
        email.classList.add('invalid');
        valid = false;
    } else {
        email.classList.add('valid');
    }

    // Validation du mot de passe
    if (password.value.length < 8) {
        password.classList.add('invalid');
        valid = false;
    } else {
        password.classList.add('valid');
    }

    // Validation de la vérification du mot de passe
    if (password.value !== verifyPassword.value) {
        verifyPassword.classList.add('invalid');
        valid = false;
    } else {
        verifyPassword.classList.add('valid');
    }

    // Validation de la question (si une option est sélectionnée)
    if (!question) {
        valid = false;
        alert('Veuillez répondre à la question');
    }

    // Si tout est valide, afficher un message
    if (valid) {
        alert('Formulaire validé !');
    }
});
