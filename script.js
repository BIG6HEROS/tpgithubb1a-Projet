document.getElementById('ajouter-eleve').addEventListener('click', function() {
    alert('Ajouter un élève');
    // Logique pour ajouter un élève
});

document.getElementById('ajouter-enseignant').addEventListener('click', function() {
    alert('Ajouter un enseignant');
    // Logique pour ajouter un enseignant
});

document.getElementById('ajouter-classe').addEventListener('click', function() {
    alert('Ajouter une classe');
    // Logique pour ajouter une classe
});

// Exemple de génération dynamique de la liste des élèves
const eleves = ['Élève 1', 'Élève 2', 'Élève 3'];
const listeEleves = document.getElementById('liste-eleves');
eleves.forEach(eleve => {
    const p = document.createElement('p');
    p.textContent = eleve;
    listeEleves.appendChild(p);
});

// Exemple de génération dynamique de la liste des enseignants
const enseignants = ['Enseignant 1', 'Enseignant 2', 'Enseignant 3'];
const listeEnseignants = document.getElementById('liste-enseignants');
enseignants.forEach(enseignant => {
    const p = document.createElement('p');
    p.textContent = enseignant;
    listeEnseignants.appendChild(p);
});

// Exemple de génération dynamique de la liste des classes
const classes = ['Classe A', 'Classe B', 'Classe C'];
const listeClasses = document.getElementById('liste-classes');
classes.forEach(classe => {
    const p = document.createElement('p');
    p.textContent = classe;
    listeClasses.appendChild(p);
});