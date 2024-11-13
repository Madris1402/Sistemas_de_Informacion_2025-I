function finalizarPedido() {
    // Obtener datos de cotizador de localStorage
    const cotizadorData = JSON.parse(localStorage.getItem('cotizadorData'));
    const consumidor = document.getElementById('consumidor').value;
    const contacto = document.getElementById('contacto').value;
    
    const pedidoData = {
        id_cotizacion: document.getElementById('idCotizacion').value,
        tecnica: cotizadorData.tecnica,
        producto: cotizadorData.producto,
        cantidad: cotizadorData.cantidad,
        fecha_requerida: cotizadorData.fecha_requerida,
        costo: cotizadorData.costo,
        consumidor: consumidor,
        contacto: contacto
    };
    
    // Guardar datos en localStorage
    let pedidosActivos = JSON.parse(localStorage.getItem('pedidosActivos')) || [];
    pedidosActivos.push(pedidoData);
    localStorage.setItem('pedidosActivos', JSON.stringify(pedidosActivos));
    
    
    // Redirigir a pedidos activos
    window.location.href = '../Pedidos Activos/Activos.html';

}

// Ejecuta la función al cargar la página
window.onload = recarga;

function recarga(){
    generarID();
    dataCotizador();
}

function generarID() {
    // Genera un número aleatorio de 6 dígitos
    const id = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("idCotizacion").textContent = id;
}

function dataCotizador() {
    const cotizadorDataString = localStorage.getItem('cotizadorData')
    const cotizadorData = JSON.parse(cotizadorDataString);
    const cantidadTA = cotizadorData.cantidad;
    const valorBase = 2;
    const factorIncr = 0.5;
    const tiempoA = valorBase * (cantidadTA * factorIncr)
    document.getElementById('tecnica').textContent=cotizadorData.tecnica;
    document.getElementById('cantidad').textContent=cotizadorData.cantidad;
    document.getElementById('producc').textContent=tiempoA;
}



function openNav() {
    document.getElementById("mySidebar").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
}



