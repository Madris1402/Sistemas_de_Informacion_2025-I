let users = {

    empleadoid: ["001", "002", "003", "004" ],
    password: ["admin", "user", "1234", "1234" ],
    usertype: ["admin", "user", "envios", "insumos"]
}


const loginform = document.getElementById('loginform');
const inputid = document.getElementById('empleadoid');
const inputpass = document.getElementById('pass');
const reccon = document.getElementById("reccon");
let found = false;

loginform.addEventListener('submit', (event) => {
    event.preventDefault();
    const empleadoid = inputid.value;
    const pass = inputpass.value;
    let found = false;

    for (let i = 0; i < users.empleadoid.length; i++) {
        if (users.empleadoid[i] === empleadoid && users.password[i] === pass) {
            found = true;
            console.log("Funcionando");
            switch (users.usertype[i]) {
                case "admin":
                    console.log("El Usuario es Admin");
                    window.location.href = "../../actors/admin.html";
                    break;
                case "user":
                    console.log("El Usuario es Usuario");
                    window.location.href = "../../actors/users.html";
                    break;
                case "envios":
                    console.log("El Usuario es Envios");
                    window.location.href = "../Envios/enviosMenu.html";
                    break;
                case "insumos":
                    console.log("El Usuario es Insumos");
                    window.location.href = "../Insumos/InsumosMenu.html";
                    break;
                default:
                    alert("Usuario o Contraseña Inválidos");
            }
            return;
        }
    }

    // Si no se encontró ningún usuario válido, muestra el alert.
    if (!found) {
        alert("Usuario o Contraseña Inválidos");
    }
});


reccon.addEventListener('click', (event) => {
    event.preventDefault();
    do {
        ID = prompt(`Recuperar Contraseña \n\nIngrese su ID de Empleado, el administrador le enviará una contraseña nueva`);

        if (ID === null || ID === "") {
            return;
        }

    } while (isNaN(ID));

    alert(`Recuperar Contraseña \n\nTarea Realizada con Éxito, se ha notificado al administrador`);
});