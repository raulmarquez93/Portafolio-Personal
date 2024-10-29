// // darkMode.js
// const toggleButton = document.getElementById('toggle-mode');
// const hero = document.getElementById('hero')
// const projects = document.getElementById('projects')
// const titles = document.querySelectorAll('.dark-blue-text')
// const toggleContainer = document.getElementById('toggle-container')
// // Al cargar la página, revisa la preferencia guardada
// window.onload = () => {
//     if (localStorage.getItem('mode') === 'dark') {
//         document.body.classList.add('dark-mode');
//         hero.classList.add('dark-mode'); 
//         projects.classList.add('dark-mode');
//         titles.forEach(title => {
//             title.classList.add('dark-mode')
//             console.log(title)
//         });

//     }
// };

// // Alternar modo y guardar la preferencia
// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     hero.classList.toggle('dark-mode');
//     projects.classList.toggle('dark-mode');
//     titles.forEach(title => {
//         title.classList.toggle('dark-mode')
//     });

//     localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
// });

// darkMode.js
const toggleButton = document.getElementById('toggle-mode');
const hero = document.getElementById('hero');
const projects = document.getElementById('projects');
const titles = document.querySelectorAll('.dark-blue-text');
const toggleContainer = document.getElementById('toggle-container');
const body = document.body;
const text = document.getElementById('mode-text');
const timelineDetails = document.querySelectorAll('.timeline-details');

// Función para aplicar el modo oscuro
function applyDarkMode() {
    body.classList.add('dark-mode');
    hero.classList.add('dark-mode');
    projects.classList.add('dark-mode');
    timelineDetails.forEach(detail => {
        detail.classList.add('dark-mode');
    });
    titles.forEach(title => {
        title.classList.add('dark-mode');
    });
}

// Función para eliminar el modo oscuro
function removeDarkMode() {
    body.classList.remove('dark-mode');
    hero.classList.remove('dark-mode');
    projects.classList.remove('dark-mode');
    titles.forEach(title => {
        title.classList.remove('dark-mode');
    });
    timelineDetails.forEach(detail => {
        detail.classList.remove('dark-mode');
    });
}

// Al cargar la página, revisa la preferencia guardada
window.onload = () => {
    if (localStorage.getItem('mode') === 'dark') {
        applyDarkMode();
    } else {
        removeDarkMode();
    }
};

// Alternar modo y guardar la preferencia
toggleContainer.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        removeDarkMode();
        localStorage.setItem('mode', 'light'); // Guarda como modo claro
    } else {
        applyDarkMode();
        localStorage.setItem('mode', 'dark'); // Guarda como modo oscuro
    }
});
