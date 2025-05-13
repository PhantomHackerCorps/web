// Efecto de texto que se escribe
const messages = [
    "Escribe 'help' para ver comandos disponibles.",
    "Este sistema está protegido por PHANTOM CORPS v6.6",
    "Advertencia: Todas las actividades son anónimas.",
    "Nivel de amenaza actual: ALTO",
    "Último objetivo comprometido: 192.168.1.105 [USA]",
    "Sistema de evasión de detección: ACTIVO"
];

let currentMessage = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeWriter() {
    const typingElement = document.getElementById('typing');
    
    if (charIndex < messages[currentMessage].length && !isDeleting) {
        typingElement.textContent += messages[currentMessage].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(typeWriter, Math.random() * 50 + 30);
    } else if (charIndex > 0 && isDeleting) {
        typingElement.textContent = messages[currentMessage].substring(0, charIndex - 1);
        charIndex--;
        typingTimeout = setTimeout(typeWriter, 30);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentMessage = (currentMessage + 1) % messages.length;
        }
        typingTimeout = setTimeout(typeWriter, isDeleting ? 2000 : 500);
    }
}

// Export for use in main.js
export { typeWriter };