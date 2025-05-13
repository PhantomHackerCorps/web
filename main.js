// Mostrar detalles del servicio
function showDetails(service) {
    const details = {
        'osint': {
            title: 'OSINT - RECONOCIMIENTO AVANZADO',
            description: 'Servicio profesional de recolección de inteligencia:<br><br>- Extracción de metadatos y huellas digitales<br>- Monitoreo de dark web y foros especializados<br>- Análisis de redes sociales y relaciones ocultas<br>- Informes detallados con objetivos claros<br><br>Tiempo estimado: 24-48 horas<br>Nivel de anonimato: MÁXIMO'
        },
        'phishing': {
            title: 'PHISHING - OPERACIONES OFENSIVAS',
            description: 'Ataques de ingeniería social personalizados:<br><br>- Campañas dirigidas por sector/industria<br>- Obtención de credenciales y acceso<br>- Inyección de payloads personalizados<br>- Reportes detallados de compromisos<br><br>Plataformas: Email, SMS, Redes Sociales, Llamadas<br>Tasa de éxito: 92%'
        },
        'ransomware': {
            title: 'RANSOMWARE - OPERACIONES DE CIFRADO',
            description: 'Ataques avanzados de secuestro de datos:<br><br>- Explotación de vulnerabilidades conocidas y 0-day<br>- Cifrado de sistemas y exfiltración de datos<br>- Negociación y cobro de rescates<br>- Eliminación de evidencias post-ataque<br><br>Incluye: Garantía de descifrado tras pago<br>Nivel de evasión: MÁXIMO'
        },
        'pentest': {
            title: 'EXPLOIT DEVELOPMENT - CREACIÓN DE ARMAMENTO',
            description: 'Desarrollo de herramientas ofensivas:<br><br>- Creación de exploits para vulnerabilidades específicas<br>- Técnicas de escalamiento de privilegios<br>- Movimiento lateral en redes comprometidas<br>- Mantenimiento de acceso persistente<br><br>Metodologías: OWASP, NIST, Zero-Day<br>Entrega: Binarios + código fuente'
        },
        'ddos': {
            title: 'DDoS - ATAQUES DE NEGACIÓN',
            description: 'Operaciones de interrupción de servicios:<br><br>- Ataques volumétricos y de aplicación<br>- Técnicas de amplificación UDP/DNS<br>- Evasión de sistemas de mitigación<br>- Reportes detallados de impacto<br><br>Volumen máximo: 1 Tbps<br>Duración: Hasta colapso del objetivo'
        }
    };
    
    document.getElementById('detail-title').textContent = details[service].title;
    document.getElementById('detail-description').innerHTML = details[service].description;
    
    document.querySelector('.services').classList.add('hidden');
    document.getElementById('service-details').classList.remove('hidden');
    
    // Mostrar mensaje de acceso denegado aleatoriamente (20% de probabilidad)
    if (Math.random() > 0.8) {
        document.getElementById('access-denied').classList.remove('hidden');
        document.getElementById('detail-description').classList.add('hidden');
    } else {
        document.getElementById('access-denied').classList.add('hidden');
        document.getElementById('detail-description').classList.remove('hidden');
    }
    
    // Desplazarse suavemente a la parte superior de los detalles
    document.getElementById('service-details').scrollIntoView({ behavior: 'smooth' });
}

function hideDetails() {
    document.querySelector('.services').classList.remove('hidden');
    document.getElementById('service-details').classList.add('hidden');
    
    // Desplazarse suavemente a la parte superior de los servicios
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
}

// Export for use in main.js
export { showDetails, hideDetails };