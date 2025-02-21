const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');
const rechazo = document.getElementById('rechazo');

const ls = localStorage;

const aceptoInvitacion = () => {
    registro.classList.remove('activo');
    exito.classList.add('activo');
}

const rechazoInvitacion = () => {
    registro.classList.remove('activo');
    rechazo.classList.add('activo');
}

// const buttonSi = document.querySelector("#buttonSi");
const buttonNo = document.querySelector("#buttonNo");





formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    var nombreCompl = formulario.nombre.value +" "+ formulario.apellido.value;
    try {
        await fetch('https://api.sheetbest.com/sheets/a9906398-1efe-4342-9ac5-213c222e2a66', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": nombreCompl,
                "Correo": formulario.comentario.value,
                "Telefono": "Si asisteré"
            })
        });
    } catch (error) {
        console.log(error);
    }
    ls.setItem("invitacion", "si")
    // acepto la invitacion
    aceptoInvitacion();

});


// NO ASISTIRA

buttonNo.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await fetch('https://api.sheetbest.com/sheets/a9906398-1efe-4342-9ac5-213c222e2a66', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": formulario.nombre.value,
                "Correo": formulario.comentario.value,
                "Telefono": "No asisteré"
            })
        });
    } catch (error) {
        console.log(error);
    }
    ls.setItem("invitacion", "no")
    // RECHAZO INVITACION
    rechazoInvitacion();
});

// CARGAR EL INICIO
document.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("invitacion") === "si") aceptoInvitacion();
    if (ls.getItem("invitacion") === "no") rechazoInvitacion();
});
