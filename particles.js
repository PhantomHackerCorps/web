import { typeWriter } from './typing.js';
import { showDetails, hideDetails } from './services.js';

// Iniciar efectos cuando la página cargue
window.onload = function() {
    typeWriter();
    
    // Efecto de parpadeo para el cursor
    setInterval(() => {
        const blink = document.querySelector('.blink');
        blink.style.visibility = (blink.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);
    
    // Efecto de glitch aleatorio en el título
    setInterval(() => {
        const title = document.querySelector('h1');
        if (Math.random() > 0.85) {
            title.classList.add('glitch');
            setTimeout(() => title.classList.remove('glitch'), 800);
        }
    }, 5000);
    
    // Efecto de hover en tarjetas de servicio
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
        
        // Para dispositivos táctiles
        card.addEventListener('touchstart', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 0 15px var(--accent-blue), 0 0 30px rgba(77, 240, 208, 0.1)';
        });
        
        card.addEventListener('touchend', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
};

// Ajustar elementos al cambiar tamaño de ventana
window.addEventListener('resize', function() {
    // Ajustar número de partículas según el tamaño de pantalla
    const particles = document.querySelectorAll('.particle');
    const desiredCount = window.innerWidth < 768 ? 20 : 50;
    
    if (particles.length > desiredCount) {
        // Eliminar partículas excedentes
        for (let i = particles.length - 1; i >= desiredCount; i--) {
            particles[i].remove();
        }
    } else if (particles.length < desiredCount) {
        // Añadir partículas faltantes
        for (let i = particles.length; i < desiredCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 3 + 1;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = '#4df0d0';
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
            
            particlesContainer.appendChild(particle);
        }
    }
});