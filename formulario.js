window.addEventListener("DOMContentLoaded", function (event) {
    const formularioReservar = document.getElementById("formulario-reservar");
    if(formularioReservar){
        formularioReservar.addEventListener("submit", validarFormulario) 
    }
});

function validarFormulario(event){
    console.log(event);

    event.preventDefault();
    event.stopPropagation();

    const nombre=event.target[0];
    if(nombre.value.length >= 3) {
        if(nombre.classList.contains("is-invalid"))nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else{
        if(nombre.classList.contains("is-valid"))nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }

    const apellido=event.target[1];
    if(apellido.value.length >= 3) {
        if(apellido.classList.contains("is-invalid"))apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
    } else{
        if(apellido.classList.contains("is-valid"))apellido.classList.remove("is-valid");
        apellido.classList.add("is-invalid");
    }
 
}

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()