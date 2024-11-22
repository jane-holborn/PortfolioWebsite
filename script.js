function toggleMenu() {
    document.querySelector('.hamburgerIcon').classList.toggle('active');  // Toggling on hamburger icon
    document.querySelector('nav ul').classList.toggle('active');  // Toggling on nav menu
}

const nav = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.hamburgerIcon'); // Select the hamburger icon by its class

// Set up IntersectionObserver to detect when the #portfolio section comes into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the #portfolio section is visible, add the .scrolled-portfolio class
            if (entry.target.id === 'portfolio') {
                nav.classList.add('scrolled-portfolio');
                // Add a class to trigger the hamburger icon transformation
                hamburgerIcon.classList.add('scrolled-portfolio');
            }
        } else {
            // When #portfolio section is no longer visible, reset the navbar and hamburger icon
            nav.classList.remove('scrolled-portfolio');
            hamburgerIcon.classList.remove('scrolled-portfolio');
        }
    });
}, {
    threshold: 0.5  // Trigger when 50% of the section is visible
});

// Observe the #portfolio section
observer.observe(document.querySelector('#portfolio'));
