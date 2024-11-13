// Obtener los elementos del select de empleados y el div para mostrar el nombre y puesto
const empleadosSelect = document.getElementById('empleados');
const empleadoSeleccionadoDiv = document.getElementById('empleadoSeleccionado');

// Obtener los datos de los empleados 
const empleados = [
    { id: 'K051399', nombre: 'Karla Gutierrez', puesto: 'Bordadora' , contacto: '55-XXXX-XXXX' },
    { id: 'R051795', nombre: 'Agustin Perez', puesto: 'Diseñador' , contacto: '55-XXXX-XXXX' }
];

// Agregar un evento al select de empleados
empleadosSelect.addEventListener('change', () => {
    const empleadoId = empleadosSelect.value;
    const empleado = empleados.find(e => e.id === empleadoId);

    if (empleado) {
        empleadoSeleccionadoDiv.innerHTML = `<p>${empleado.nombre} - ${empleado.puesto}</p><p>${empleado.contacto}</p>`; 
    } else {
        empleadoSeleccionadoDiv.textContent = "";
    }
});

// Obtener todas las celdas donde se ingresarán las horas y los costos
const costoHoraAdicionalInput = document.getElementById('costoxhoraA');
const horasAdicionalesInputs = document.querySelectorAll('.horas');
const subtotales = document.querySelectorAll('.subtotal');
const totalDiv = document.querySelector('.total');

costoHoraAdicionalInput.addEventListener('input', () => {
    const costoHoraAdicional = parseFloat(costoHoraAdicionalInput.value);

    horasAdicionalesInputs.forEach((input, index) => {
        const horasAdicionales = parseFloat(input.value);
        const subtotal = horasAdicionales * costoHoraAdicional;
        subtotales[index].textContent = `$${isNaN(subtotal) ? 0: subtotal.toFixed(2)}`; 
    });
});



function calculateTotal() {
  let total = 0;
  subtotales.forEach(subtotal => {
    const subtotalValue = parseFloat(subtotal.textContent.replace('$', ''));
    if (!isNaN(subtotalValue)){
    total += subtotalValue;
    }
    });
    totalDiv.textContent = `TOTAL: $${total.toFixed(2)}`;
}


// Trigger the calculation on page load and whenever the cost per hour or hours worked changes
document.addEventListener('DOMContentLoaded', calculateTotal);
costoHoraAdicionalInput.addEventListener('input', calculateTotal);
horasAdicionalesInputs.forEach(input => {
  input.addEventListener('input', calculateTotal);
});


function openNav() {
    document.getElementById("mySidebar").classList.add("open");
  }
  
  function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
}