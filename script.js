function toggleMenu() {
    document.querySelector('.hamburgerIcon').classList.toggle('active');  // Toggling on hamburger icon
    document.querySelector('nav ul').classList.toggle('active');  // Toggling on nav menu
}

document.querySelector('.hamburgerIcon').addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        toggleMenu();
    }
});