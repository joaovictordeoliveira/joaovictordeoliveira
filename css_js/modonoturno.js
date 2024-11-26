const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light-theme';

document.body.classList.add(currentTheme);
updateButtonText(currentTheme);

themeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        updateButtonText('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        updateButtonText('dark-theme');
    }
});

function updateButtonText(theme) {
    if (theme === 'dark-theme') {
        themeToggleButton.textContent = '☀';
    } else {
        themeToggleButton.textContent = '🌙';
    }
}