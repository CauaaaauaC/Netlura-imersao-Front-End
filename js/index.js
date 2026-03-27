const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(`${theme}-mode`);

    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Modo escuro ativado, clique para modo claro' : 'Modo claro ativado, clique para modo escuro');
    }

    localStorage.setItem('netflixTheme', theme);
}

function initTheme() {
    const storedTheme = localStorage.getItem('netflixTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(theme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        applyTheme(isDark ? 'light' : 'dark');
    });
}

// Armazenar perfil ativo em localStorage
function initProfileSelection() {
    const profiles = document.querySelectorAll('.profile');
    
    profiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            e.preventDefault();
            
            const profileName = profile.querySelector('figcaption').textContent;
            const profileImage = profile.querySelector('img').src;
            
            localStorage.setItem('activeProfile', JSON.stringify({
                name: profileName,
                image: profileImage
            }));
            
            // Navegar para o catálogo após armazenar
            window.location.href = profile.href;
        });
    });
}

initTheme();
initProfileSelection();
