// Efecto de partículas
const particlesContainer = document.getElementById('particles');
const particleCount = window.innerWidth < 768 ? 20 : 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Posición aleatoria
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Tamaño aleatorio
    const size = Math.random() * 3 + 1;
    
    // Color aleatorio
    const color = '#4df0d0';
    
    // Establecer propiedades
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Animación
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
    
    // Agregar al contenedor
    particlesContainer.appendChild(particle);
    
    // Crear keyframes dinámicamente para cada partícula
    const keyframes = `
        @keyframes float {
            0% { transform: translate(0, 0); opacity: ${Math.random() * 0.5 + 0.1}; }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: ${Math.random() * 0.7 + 0.3}; }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            100% { transform: translate(0, 0); opacity: ${Math.random() * 0.5 + 0.1}; }
        }
    `;
    
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
}