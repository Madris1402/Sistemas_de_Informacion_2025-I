const pedidosActivos = [
    { id: 'A123', alerta: 5, descripcion: 'Pedido de materiales', consumidor: 'Cliente A' },
    { id: 'B456', alerta: 3, descripcion: 'Pedido de equipos', consumidor: 'Cliente B' }
];

function cargarPedidosActivos() {
    const activosTable = document.getElementById('activosTable');
    pedidosActivos.forEach(pedido => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.alerta}</td>
            <td>${pedido.descripcion}</td>
            <td>${pedido.consumidor}</td>
        `;
        activosTable.appendChild(row);
    });
}

window.onload = cargarPedidosActivos;
