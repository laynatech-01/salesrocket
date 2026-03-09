// 1. Diccionario de agentes
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

// 2. Función para mostrar/ocultar el bot
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
        const isVisible = chatWindow.style.display === 'flex';
        chatWindow.style.display = isVisible ? 'none' : 'flex';
    }
}

/**
 * 3. Carga el sitio y el agente correspondiente
 */
function cargarSitio(urlSitio, idAgente, elemento) {
    const iframeCentral = document.getElementById('central-frame');
    const iframeChat = document.querySelector('#chat-window iframe');

    // Marcar botón en verde (clase .active definida en tu CSS)
    document.querySelectorAll('.menu-item-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (elemento) {
        elemento.classList.add('active');
    }

    // Cargar sitio web en el centro con efecto de opacidad
    if (iframeCentral) {
        iframeCentral.style.opacity = '0'; 
        iframeCentral.src = urlSitio;
        iframeCentral.onload = () => {
            iframeCentral.style.opacity = '1';
        };
    }

    // Cambiar agente de IA en el chat según el diccionario
    if (idAgente && iframeChat && AGENTES[idAgente]) {
        iframeChat.src = AGENTES[idAgente];
    }
}

// 4. Configuración al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Si quieres que aparezca el logo al inicio, no llames a ningún botón aquí.
    // Solo inicializamos el estado del chat si es necesario.
    
    // Opcional: Abrir el chat automáticamente al entrar
    // toggleChat(); 
});