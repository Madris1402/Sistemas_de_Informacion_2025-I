let shipments = [];
let editIndex = -1;

// Datos de prueba
const sampleShipments = [

];

// Cargar datos de prueba al inicio
function loadSampleData() {
    shipments = sampleShipments;
    renderTable();
}

document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const direc = document.getElementById('direc').value;
    const rfc = document.getElementById('rfc').value;

    if (editIndex === -1) {
        // Agregar nuevo envío
        shipments.push({ name, contact, direc, rfc });
    } else {
        // Editar envío existente
        shipments[editIndex] = { name, contact, direc, rfc };
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
            <td>${shipment.name}</td>
            <td>${shipment.contact}</td>
            <td>${shipment.direc}</td>
            <td>${shipment.rfc}</td>
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
    document.getElementById('name').value = shipment.name;
    document.getElementById('contact').value = shipment.contact;
    document.getElementById('direc').value = shipment.direc;
    document.getElementById('rfc').value = shipment.rfc;

    editIndex = index;
}

function deleteShipment(index) {
    shipments.splice(index, 1);
    renderTable();
}

// Cargar datos de prueba al iniciar
loadSampleData();


function openNav() {
    document.getElementById("mySidebar").classList.add("open");
  }
  
  function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
}