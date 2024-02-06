const modeIcon = document.getElementById('mode-icon');
const toggleMenu = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.nav-links');

let darkModeEnabled = false;

modeIcon.addEventListener('click', function () {
    toggleDarkMode();
});

toggleMenu.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

function toggleDarkMode() {
    if (!darkModeEnabled) {
        document.getElementById('stylesheet').href = 'dark-mode.css';
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        darkModeEnabled = true;
    } else {
        document.getElementById('stylesheet').href = 'light-mode.css';
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        darkModeEnabled = false;
    }
}
