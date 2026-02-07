// Función para mostrar/ocultar el bot
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const isVisible = chatWindow.style.display === 'flex';
    chatWindow.style.display = isVisible ? 'none' : 'flex';
}

// Función para cargar sitios en el iframe con efecto de carga
function cargarSitio(url) {
    const iframe = document.getElementById('central-frame');
    const loader = document.getElementById('loader');
    
    // Si la URL es la de marcador de posición, avisar
    if (url.includes('TU_USUARIO')) {
        alert("Por favor, configura tu URL real de Nocnok o Wasi en el código.");
        return;
    }

    iframe.style.opacity = '0.5';
    iframe.src = url;
    
    iframe.onload = function() {
        iframe.style.opacity = '1';
    };
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema DRAD Ingeniería 2026 - Panel de Inventarios Activo");
    
    // Carga predeterminada (puedes cambiarla por la de Wasi si prefieres)
    cargarSitio('https://TU_USUARIO.nocnok.com/');
});