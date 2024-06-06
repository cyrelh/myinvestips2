//Cette section gère la sélection et le changement du thème de l'interface utilisateur
//Elle utilise le stockage local pour sauvegarder le thème choisi par l'utilisateur

// Sélection de l'élément body du document HTML
const body = document.body;

// Sélection de l'icône du thème sombre
const btnTheme = document.querySelector('.fa-moon');

// Fonction pour ajouter les classes de thème
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass); // Ajout de la classe au body
  btnTheme.classList.add(btnClass); // Ajout de la classe à l'icône de thème
};

// Récupération du thème actuel depuis le stockage local
const getBodyTheme = localStorage.getItem('portfolio-theme');

// Récupération de l'icône de thème actuelle depuis le stockage local
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// Application des classes de thème au chargement de la page
addThemeClass(getBodyTheme, getBtnTheme);

// Fonction pour vérifier si le thème sombre est appliqué
const isDark = () => body.classList.contains('dark');

// Fonction pour définir le thème
const setTheme = (bodyClass, btnClass) => {
  // Suppression des anciennes classes de thème
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));
  // Ajout des nouvelles classes de thème
  addThemeClass(bodyClass, btnClass);
  // Enregistrement du thème dans le stockage local
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Fonction pour basculer entre les thèmes clair et sombre
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

// Ajout d'un écouteur d'événements de clic sur le bouton de thème
btnTheme.addEventListener('click', toggleTheme);




//Cette section gère l'affichage des modales lorsque l'utilisateur clique sur un élément déclencheur
// Elle recherche tous les éléments avec la classe .open-modal
//puis ajoute des gestionnaires d'événements pour afficher et masquer les modales en fonction des actions de l'utilisateur


// Récupérer tous les éléments qui ouvrent les modales
const modalTriggers = document.querySelectorAll(".open-modal");

// Pour chaque élément, ajouter un gestionnaire d'événement au clic
modalTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
        // Récupérer l'ID de la modal spécifique
        const modalId = trigger.getAttribute("data-modal-id");
        // Récupérer la modal correspondante
        const modal = document.getElementById(modalId);
        // Afficher la modal
        modal.style.display = "block";

        // Récupérer l'élément de fermeture (la croix)
        const closeModal = modal.querySelector(".close-modal");

        // Quand l'utilisateur clique sur la croix, fermer la modal
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        // Quand l'utilisateur clique en dehors de la modal, fermer la modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});



/*PARTIE MODALE*/
// Sélectionnez la fenêtre modale et les boutons de contrôle
const modal1 = document.getElementById("project-modal-1");
const modalText = modal1.querySelector("#modal-text");
const prevBtn = modal1.querySelector(".modal-btn-prev");
const nextBtn = modal1.querySelector(".modal-btn-next");
const imageContainer = modal1.querySelector(".image-container");

// Tableau des chemins d'accès des images
const images = [
  "./images/Booki/Booki-1.webp",
  "./images/Booki/Booki-2.webp",
  "./images/Booki/Booki-3.webp",
  "./images/Booki/Booki-m-1.webp"
];

// Index de l'image actuellement affichée
let currentIndex = 0;
let showingText = true; // Variable pour indiquer si le texte est affiché

// Fonction pour afficher l'image suivante
function showNextImage() {
  // Si nous montrons actuellement du texte, passer à l'image suivante
  if (showingText) {
    // Masquer le texte
    modalText.style.display = "none";
    // Afficher le conteneur d'image
    imageContainer.style.display = "block";
    currentIndex++; // Incrémenter l'index pour afficher la première image
    showImage();
    showingText = false; // Mettre à jour l'état pour indiquer que nous affichons maintenant une image
    prevBtn.style.display = "inline-block"; // Afficher le bouton précédent
  } else {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
}

// Fonction pour afficher l'image précédente
function showPrevImage() {
  if (currentIndex === 0) {
    // Si nous sommes sur la première image et que le texte est masqué, afficher le texte
    if (!showingText) {
      modalText.style.display = "none";
      imageContainer.style.display = "none";
      showingText = true; // Mettre à jour l'état pour indiquer que nous affichons maintenant du texte
      prevBtn.style.display = "none"; // Cacher le bouton précédent
    }
  } else {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
}

// Fonction pour afficher l'image correspondante
function showImage() {
  imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Image du projet Booki" class="modal-image-booki">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back"
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);


// Sélectionnez la fenêtre modale et les boutons de contrôle
const modal2 = document.getElementById("project-modal-2");
const modalTextSophieBluel = modal2.querySelector("#modal-text");
const prevBtnSophieBluel = modal2.querySelector(".modal-btn-prev");
const nextBtnSophieBluel = modal2.querySelector(".modal-btn-next");
const imageContainerSophieBluel = modal2.querySelector(".image-container");

// Tableau des chemins d'accès des images
const imagesSophieBluel = [
  "./images/Sophie/Sophie-1.webp",
  "./images/Sophie/Sophie-2.webp",
  "./images/Sophie/Sophie-3.webp",
  "./images/Sophie/Sophie-4.webp",
  "./images/Sophie/Sophie-5.webp",
  "./images/Sophie/Sophie-6.webp",
  "./images/Sophie/Sophie-7.webp",
  "./images/Sophie/Sophie-8.webp",
  "./images/Sophie/Sophie-9.webp",
  "./images/Sophie/Sophie-10.webp"
];

// Index de l'image actuellement affichée
let currentIndexSophieBluel = 0;
let showingTextSophieBluel = true; // Variable pour indiquer si le texte est affiché

// Fonction pour afficher l'image suivante
function showNextImageSophieBluel() {
  // Si nous montrons actuellement du texte, passer à l'image suivante
  if (showingTextSophieBluel) {
    // Masquer le texte
    modalTextSophieBluel.style.display = "none";
    // Afficher le conteneur d'image
    imageContainerSophieBluel.style.display = "block";
    currentIndexSophieBluel++; // Incrémenter l'index pour afficher la première image
    showImageSophieBluel();
    showingTextSophieBluel = false; // Mettre à jour l'état pour indiquer que nous affichons maintenant une image
    prevBtnSophieBluel.style.display = "inline-block"; // Afficher le bouton précédent
  } else {
    currentIndexSophieBluel = (currentIndexSophieBluel + 1) % imagesSophieBluel.length;
    showImageSophieBluel();
  }
}

// Fonction pour afficher l'image précédente
function showPrevImageSophieBluel() {
  if (currentIndexSophieBluel === 0) {
    // Si nous sommes sur la première image et que le texte est masqué, afficher le texte
    if (!showingTextSophieBluel) {
      modalTextSophieBluel.style.display = "none";
      imageContainerSophieBluel.style.display = "none";
      showingTextSophieBluel = true; // Mettre à jour l'état pour indiquer que nous affichons maintenant du texte
      prevBtnSophieBluel.style.display = "none"; // Cacher le bouton précédent
    }
  } else {
    currentIndexSophieBluel = (currentIndexSophieBluel - 1 + imagesSophieBluel.length) % imagesSophieBluel.length;
    showImageSophieBluel();
  }
}

// Fonction pour afficher l'image correspondante
function showImageSophieBluel() {
  imageContainerSophieBluel.innerHTML = `<img src="${imagesSophieBluel[currentIndexSophieBluel]}" alt="Image du projet Sophie Bluel - Archiwebos" class="modal-image-sophie">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back"
nextBtnSophieBluel.addEventListener("click", showNextImageSophieBluel);
prevBtnSophieBluel.addEventListener("click", showPrevImageSophieBluel);


// Sélectionnez la fenêtre modale et les boutons de contrôle
const modal3 = document.getElementById("project-modal-3");
const modalTextNinaCarduccci = modal3.querySelector("#modal-text");
const prevBtnNinaCarduccci = modal3.querySelector(".modal-btn-prev");
const nextBtnNinaCarduccci = modal3.querySelector(".modal-btn-next");
const imageContainerNinaCarduccci = modal3.querySelector(".image-container");

// Tableau des chemins d'accès des images
const imagesNinaCarduccci = [
  "./images/Nina/Nina-1.webp",
  "./images/Nina/Nina-2.webp",
  "./images/Nina/Nina-3.webp",
  "./images/Nina/Nina-4.webp",
  "./images/Nina/Nina-5.webp",
];

// Index de l'image actuellement affichée
let currentIndexNinaCarduccci = 0;
let showingTextNinaCarduccci  = true; // Variable pour indiquer si le texte est affiché

// Fonction pour afficher l'image suivante
function showNextImageNinaCarduccci () {
  // Si nous montrons actuellement du texte, passer à l'image suivante
  if (showingTextNinaCarduccci ) {
    // Masquer le texte
    modalTextNinaCarduccci.style.display = "none";
    // Afficher le conteneur d'image
    imageContainerNinaCarduccci.style.display = "block";
    currentIndexNinaCarduccci++; // Incrémenter l'index pour afficher la première image
    showImageNinaCarduccci();
    showingTextNinaCarduccci  = false; // Mettre à jour l'état pour indiquer que nous affichons maintenant une image
    prevBtnNinaCarduccci.style.display = "inline-block"; // Afficher le bouton précédent
  } else {
    currentIndexNinaCarduccci = (currentIndexNinaCarduccci + 1) % imagesNinaCarduccci.length;
    showImageNinaCarduccci();
  }
}

// Fonction pour afficher l'image précédente
function showPrevImageNinaCarduccci() {
  if (currentIndexNinaCarduccci=== 0) {
    // Si nous sommes sur la première image et que le texte est masqué, afficher le texte
    if (!showingTextNinaCarduccci) {
      modalTextNinaCarduccci.style.display = "none";
      imageContainerNinaCarduccci.style.display = "none";
      showingTextNinaCarduccci = true; // Mettre à jour l'état pour indiquer que nous affichons maintenant du texte
      prevBtnNinaCarduccci.style.display = "none"; // Cacher le bouton précédent
    }
  } else {
    currentIndexNinaCarduccci = (currentIndexNinaCarduccci - 1 + imagesNinaCarduccci.length) % imagesNinaCarduccci.length;
    showImageNinaCarduccci();
  }
}

// Fonction pour afficher l'image correspondante
function showImageNinaCarduccci() {
  imageContainerNinaCarduccci.innerHTML = `<img src="${imagesNinaCarduccci[currentIndexNinaCarduccci]}" alt="Image du projet Nina Carduccci" class="modal-image-nina">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back"
nextBtnNinaCarduccci.addEventListener("click", showNextImageNinaCarduccci);
prevBtnNinaCarduccci.addEventListener("click", showPrevImageNinaCarduccci);


// Sélectionnez la fenêtre modale et les boutons de contrôle pour le projet Kasa
const modal4 = document.getElementById("project-modal-4");
const modalTextKasa = modal4.querySelector("#modal-text"); // Correction du sélecteur
const prevBtnKasa = modal4.querySelector(".modal-btn-prev");
const nextBtnKasa = modal4.querySelector(".modal-btn-next");
const imageContainerKasa = modal4.querySelector(".image-container");

// Tableau des chemins d'accès des images pour le projet Kasa
const imagesKasa = [
  "./images/Kasa/Kasa-1.webp",
  "./images/Kasa/Kasa-2.webp",
  "./images/Kasa/Kasa-3.webp",
  "./images/Kasa/Kasa-4.webp",
  "./images/Kasa/Kasa-5.webp",
  "./images/Kasa/Kasa-6.webp",
  "./images/Kasa/Kasa-7.webp",
  "./images/Kasa/Kasa-mobile-1.webp",
  "./images/Kasa/Kasa-mobile-2.webp"
];

// Index de l'image actuellement affichée pour le projet Kasa
let currentIndexKasa = 0;
let showingTextKasa = true;

// Fonction pour afficher l'image suivante pour le projet Kasa
function showNextImageKasa() {
  if (showingTextKasa) {
    modalTextKasa.style.display = "none";
    imageContainerKasa.style.display = "block";
    currentIndexKasa++;
    showImageKasa();
    showingTextKasa = false;
    prevBtnKasa.style.display = "inline-block";
  } else {
    currentIndexKasa = (currentIndexKasa + 1) % imagesKasa.length;
    showImageKasa();
  }
}

// Fonction pour afficher l'image précédente pour le projet Kasa
function showPrevImageKasa() {
  if (currentIndexKasa === 0) {
    if (!showingTextKasa) {
      modalTextKasa.style.display = "block";
      imageContainerKasa.style.display = "none";
      showingTextKasa = true;
      prevBtnKasa.style.display = "none";
    }
  } else {
    currentIndexKasa = (currentIndexKasa - 1 + imagesKasa.length) % imagesKasa.length;
    showImageKasa();
  }
}

// Fonction pour afficher l'image correspondante pour le projet Kasa
function showImageKasa() {
  imageContainerKasa.innerHTML = `<img src="${imagesKasa[currentIndexKasa]}" alt="Image du projet Kasa" class="modal-image-kasa">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back" pour le projet Kasa
nextBtnKasa.addEventListener("click", showNextImageKasa);
prevBtnKasa.addEventListener("click", showPrevImageKasa);




// Sélectionnez la fenêtre modale et les boutons de contrôle pour le projet Grimoire
const modal5 = document.getElementById("project-modal-5");
const modalTextGrimoire= modal5.querySelector("#modal-text"); // Correction du sélecteur
const prevBtnGrimoire = modal5.querySelector(".modal-btn-prev");
const nextBtnGrimoire = modal5.querySelector(".modal-btn-next");
const imageContainerGrimoire = modal5.querySelector(".image-container");

// Tableau des chemins d'accès des images pour le projet Grimoire
const imagesGrimoire = [
  "./images/Grimoire/Grimoire-1.webp",
  "./images/Grimoire/Grimoire-2.webp",
  "./images/Grimoire/Grimoire-3.webp",
  "./images/Grimoire/Grimoire-4.webp",
  "./images/Grimoire/Grimoire-5.webp",
  "./images/Grimoire/Grimoire-6.webp",
  "./images/Grimoire/Grimoire-8.webp",
  "./images/Grimoire/Grimoire-9.webp",
  "./images/Grimoire/Grimoire-10.webp",
  "./images/Grimoire/Grimoire-11.webp",
  "./images/Grimoire/Grimoire-12.webp",
  "./images/Grimoire/Grimoire-13.webp"
];

// Index de l'image actuellement affichée pour le projet Grimoire
let currentIndexGrimoire = 0;
let showingTextGrimoire = true;

// Fonction pour afficher l'image suivante pour le projet Grimoire
function showNextImageGrimoire() {
  if (showingTextGrimoire) {
    modalTextGrimoire.style.display = "none";
    imageContainerGrimoire.style.display = "block";
    currentIndexGrimoire++;
    showImageGrimoire();
    showingTextGrimoire = false;
    prevBtnGrimoire.style.display = "inline-block";
  } else {
    currentIndexGrimoire = (currentIndexGrimoire + 1) % imagesGrimoire.length;
    showImageGrimoire();
  }
}

// Fonction pour afficher l'image précédente pour le projet Grimoire
function showPrevImageGrimoire() {
  if (currentIndexGrimoire === 0) {
    if (!showingTextGrimoire) {
      modalTextGrimoire.style.display = "block";
      imageContainerGrimoire.style.display = "none";
      showingTextGrimoire = true;
      prevBtnGrimoire.style.display = "none";
    }
  } else {
    currentIndexGrimoire = (currentIndexGrimoire - 1 + imagesGrimoire.length) % imagesGrimoire.length;
    showImageGrimoire();
  }
}

// Fonction pour afficher l'image correspondante pour le projet Grimoire
function showImageGrimoire() {
  imageContainerGrimoire.innerHTML = `<img src="${imagesGrimoire[currentIndexGrimoire]}" alt="Image du projet Mon Vieux Grimoire" class="modal-image-grimoire">`;
}

// Écouteurs d'événements pour les boutons "Next" et "Back" pour le projet Kasa
nextBtnGrimoire.addEventListener("click", showNextImageGrimoire);
prevBtnGrimoire.addEventListener("click", showPrevImageGrimoire);