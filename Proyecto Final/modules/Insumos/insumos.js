function actualizarEstatus() {
    const filas = document.querySelectorAll("tbody tr");
    filas.forEach(fila => {
        const cantidad = parseInt(fila.querySelector(".cantidad").innerText);
        const estatus = fila.querySelector(".estatus");

        if (cantidad === 0) {
            estatus.innerHTML = '<span class="status-circle red"></span> No disponible';
        } else if (cantidad < 10) {
            estatus.innerHTML = '<span class="status-circle yellow"></span> Poca disponibilidad';
        } else {
            estatus.innerHTML = '<span class="status-circle green"></span> Disponible';
        }
    });
}

// Inicializa el estatus al cargar la página
actualizarEstatus();

function eliminarFila(boton) {
    const fila = boton.closest("tr");
    fila.remove();
    guardarInsumos();
}

function actualizarCantidad(boton) {
    const fila = boton.closest("tr");
    const cantidadCelda = fila.querySelector(".cantidad");
    let nuevaCantidad = prompt("Ingrese la nueva cantidad:");

    if (nuevaCantidad !== null) {
        nuevaCantidad = parseInt(nuevaCantidad);
        if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
            cantidadCelda.innerText = nuevaCantidad;
            actualizarEstatus();
            guardarInsumos();
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    }
}

function agregarInsumo(nombre, cantidad, descripcion) {
    const tabla = document.getElementById("tabla-insumos");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td class="cantidad">${cantidad}</td>
        <td>${descripcion}</td>
        <td class="estatus"></td>
        <td>
            <button onclick="eliminarFila(this)">Eliminar</button>
            <button onclick="actualizarCantidad(this)">Actualizar</button>
        </td>
    `;
    tabla.appendChild(nuevaFila);
    actualizarEstatus();
}

function guardarInsumos() {
    const insumos = [];
    const filas = document.querySelectorAll("tbody tr");
    filas.forEach(fila => {
        const id = fila.cells[0].innerText;
        const cantidad = fila.querySelector(".cantidad").innerText;
        const descripcion = fila.cells[2].innerText;
        insumos.push({ id, cantidad, descripcion });
    });
    localStorage.setItem("insumos", JSON.stringify(insumos));
}

function cargarInsumos() {
    const insumos = JSON.parse(localStorage.getItem("insumos")) || [];
    insumos.forEach(insumo => {
        agregarInsumo(insumo.id, insumo.cantidad, insumo.descripcion);
    });
}

// Cargar insumos al iniciar la página
cargarInsumos();

function agregarInsumoDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get("nombre");
    const cantidad = params.get("cantidad");
    const descripcion = params.get("descripcion");

    if (nombre && cantidad && descripcion) {
        agregarInsumo(nombre, cantidad, descripcion);
        guardarInsumos();
    }
}

// Llama a la función para agregar insumo al cargar la página
agregarInsumoDesdeURL();