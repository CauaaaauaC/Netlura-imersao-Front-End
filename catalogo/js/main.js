import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const activeProfileData = localStorage.getItem('activeProfile');
    
    if (activeProfileData) {
        const activeProfile = JSON.parse(activeProfileData);
        
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = activeProfile.name;
        if (profileIcon) profileIcon.src = activeProfile.image;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
