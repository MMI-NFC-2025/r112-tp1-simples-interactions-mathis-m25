// Sélectionne l'élément avec l'ID "a-mettre-en-rouge"
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");

// Change directement la couleur de cet élément en rouge
aMettreEnRouge.style.color = "red";

// Sélectionne l'élément avec l'ID "en-rouge-suite-a-click" (un bouton)
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

// Ajoute un écouteur d'événement "click" à ce bouton
enRougeSuiteAClick.addEventListener("click", (evt) => {
  // Quand on clique, le bouton lui-même devient rouge
  enRougeSuiteAClick.style.color = "red";
});

// Sélectionne tous les éléments <h2> de la page
const collH2 = document.querySelectorAll("h2");

// Boucle sur chaque élément <h2> trouvé
collH2.forEach((elm) => {
  // Ajoute un écouteur d'événement "click" à chaque <h2>
  elm.addEventListener("click", (evt) => {
    // Quand on clique sur un <h2>, cet <h2> spécifique (evt.target) devient rouge
    evt.target.style.color = "red";
  });
});