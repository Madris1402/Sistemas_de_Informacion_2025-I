// Obtener los elementos del select de empleados y el div para mostrar el nombre y puesto
const empleadosSelect = document.getElementById('empleados');
const empleadoSeleccionadoDiv = document.getElementById('empleadoSeleccionado');

// Obtener los datos de los empleados 
const empleados = [
    { id: 'K051399', nombre: 'Karla Gutierrez', puesto: 'Bordadora' },
    { id: 'R051795', nombre: 'Agustin Perez', puesto: 'Diseñador' }
];

// Agregar un evento al select de empleados
empleadosSelect.addEventListener('change', () => {
    const empleadoId = empleadosSelect.value;
    const empleado = empleados.find(e => e.id === empleadoId);

    if (empleado) {
        empleadoSeleccionadoDiv.textContent = `${empleado.nombre} - ${empleado.puesto}`;
    } else {
        empleadoSeleccionadoDiv.textContent = "Empleado no encontrado";
    }
});

// Obtener todas las celdas donde se ingresarán las horas y los costos
const horasInputs = document.querySelectorAll('.horas');
const costoInputs = document.querySelectorAll('.costo');
const subtotalCells = document.querySelectorAll('.subtotal');
const totalDisplay = document.querySelector('.sum_sub');
let totalSum = 0;

// Iterar sobre cada día y calcular el subtotal
horasInputs.forEach((horasInput, index) => {
    horasInput.addEventListener('input', () => {
        const costo = costoInputs[index].value;
        const subtotal = horasInput.value * costo;
        subtotalCells[index].textContent = subtotal;
        totalSum += subtotal;
    });
});

costoInputs.forEach((costoInput, index) => {
    costoInput.addEventListener('input', () => {
        const horas = horasInputs[index].value;
        const subtotal = horas * costoInput.value;
        subtotalCells[index].textContent = subtotal;
        totalSum += subtotal;
    });
});


totalDisplay.textContent = `Total: $${totalSum}`;

const btnMenu = document.getElementById('btnMenu');

;