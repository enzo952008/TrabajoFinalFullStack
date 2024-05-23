document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');

    menuToggle.addEventListener('click', function() {
        if (menuLinks.style.display === 'flex') {
            menuLinks.style.display = 'none';
        } else {
            menuLinks.style.display = 'flex';
        }
    });
});
