document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggle-nav');
    const nav = document.querySelector('nav');
    const body = document.body;

    toggleNavButton.addEventListener('click', function() {
        nav.classList.toggle('show');
        body.classList.toggle('nav-open');
    });

    // Ensure the nav is hidden on small screens by default
    if (window.innerWidth <= 768) {
        nav.classList.remove('show');
        body.classList.remove('nav-open');
    }
});
