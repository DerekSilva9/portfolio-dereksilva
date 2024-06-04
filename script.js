document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar .close-btn');

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
