// JavaScript pour valider et envoyer le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Merci pour votre message ! Nous reviendrons vers vous sous peu.');
        document.getElementById('contactForm').reset(); // Réinitialiser le formulaire
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
