let shipments = [];
let editIndex = -1;

// Datos de prueba
const sampleShipments = [
    { orderId: '001', shippingMethod: 'FedEx', orderStatus: 'Enviado' },
    { orderId: '002', shippingMethod: 'DHL', orderStatus: 'En tránsito' },
    { orderId: '003', shippingMethod: 'UPS', orderStatus: 'Entregado' }
];

// Cargar datos de prueba al inicio
function loadSampleData() {
    shipments = sampleShipments;
    renderTable();
}

document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderId = document.getElementById('orderId').value;
    const shippingMethod = document.getElementById('shippingMethod').value;
    const orderStatus = document.getElementById('orderStatus').value;

    if (editIndex === -1) {
        // Agregar nuevo envío
        shipments.push({ orderId, shippingMethod, orderStatus });
    } else {
        // Editar envío existente
        shipments[editIndex] = { orderId, shippingMethod, orderStatus };
        editIndex = -1; // Resetear el índice de edición
    }

    renderTable();
    document.getElementById('shippingForm').reset();
});

function renderTable() {
    const tbody = document.querySelector('#shippingTable tbody');
    tbody.innerHTML = '';

    shipments.forEach((shipment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shipment.orderId}</td>
            <td>${shipment.shippingMethod}</td>
            <td>${shipment.orderStatus}</td>
            <td>
                <button onclick="editShipment(${index})">Editar</button>
                <button onclick="deleteShipment(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editShipment(index) {
    const shipment = shipments[index];
    document.getElementById('orderId').value = shipment.orderId;
    document.getElementById('shippingMethod').value = shipment.shippingMethod;
    document.getElementById('orderStatus').value = shipment.orderStatus;

    editIndex = index;
}

function deleteShipment(index) {
    shipments.splice(index, 1);
    renderTable();
}

// Cargar datos de prueba al iniciar
loadSampleData();
