// Diccionario actualizado para los agentes
const AGENTES = {
    agente_salesrocket: "https://laynatech-01.github.io/salesrocket-ia/",  
    agente_globalcontrol: "https://laynatech-01.github.io/globalcontrol-ia/",
    agente_laynatech: "https://laynatech-01.github.io/salesrocket-ia/",
    agente_altamira: "https://laynatech-01.github.io/salesrocket-ia/", 
    agente_aquapak: "https://laynatech-01.github.io/salesrocket-ia/",
    agente_barmesa: "https://laynatech-01.github.io/salesrocket-ia/",
    agente_genmann: "https://laynatech-01.github.io/salesrocket-ia/",
    agente_fx1: "https://laynatech-01.github.io/salesrocket-ia/"
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

// Espera a que toda la página cargue
window.onload = function() {
    // Llamamos a la función que ya tienes definida en tu HTML
    toggleChat(); 
};


});