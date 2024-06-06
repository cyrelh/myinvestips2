// Ouvrir la modal
document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

// Fermer la modal en cliquant sur la croix
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Fermer la modal en cliquant en dehors de la modal
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}
