// Diccionario de variables para los 6 agentes
const AGENTES = {
    agente1: "https://laynatech-01.github.io/asistente1/", // Catalogo 1
    agente2: "https://laynatech-01.github.io/drad/",      // Drad Ingenieria
    agente3: "https://laynatech-01.github.io/globalcontrol/",  // GlobalControl
    agente4: "https://laynatech-01.github.io/agente-splits/",  // MiniSplits
    agente5: "https://laynatech-01.github.io/agente-fx1/",     // FX1 Academy
    agente6: "https://laynatech-01.github.io/agente-laynatech/" // LaynaTech
};

// Función para mostrar/ocultar el bot
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const isVisible = chatWindow.style.display === 'flex';
    chatWindow.style.display = isVisible ? 'none' : 'flex';
}

/**
 * Carga el sitio y el agente correspondiente
 * @param {string} urlSitio - URL para el iframe central
 * @param {string} idAgente - Clave del agente (agente1 al agente6)
 * @param {HTMLElement} elemento - El botón para marcar en verde
 */
function cargarSitio(urlSitio, idAgente, elemento) {
    const iframeCentral = document.getElementById('central-frame');
    const iframeChat = document.querySelector('#chat-window iframe');

    // 1. Marcar botón en verde
    if (elemento) {
        document.querySelectorAll('.menu-item-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        elemento.classList.add('active');
    }

    // 2. Cargar sitio web en el centro
    if (iframeCentral) {
        iframeCentral.style.opacity = '0.3';
        iframeCentral.src = urlSitio;
        iframeCentral.onload = () => iframeCentral.style.opacity = '1';
    }

    // 3. Cambiar agente de IA en el chat
    if (idAgente && iframeChat && AGENTES[idAgente]) {
        iframeChat.src = AGENTES[idAgente];
    }
}

// Carga automática al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const primerBoton = document.querySelector('.menu-item-btn');
    if (primerBoton) {
        primerBoton.click();
    }
});