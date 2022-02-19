const URL = 'https://oqcomnhyainnbynjghlt.supabase.co/rest/v1/Pacientes?select=*';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xY29tbmh5YWlubmJ5bmpnaGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxNDg4NTUsImV4cCI6MTk2MDcyNDg1NX0.u5Tgiiox0fnyuOTFb_2ZBx4YlxieeaL9uXHe0VOCw-8'

window.addEventListener("DOMContentLoaded", function (event) {
    const formularioReservar = document.getElementById("formulario-reservar");

    // Codigo extraido de bootrap que permite agregar los estilos de valdacion que ofrece
    
    // Seleccionamos todos los elementos que poseen la clase ".needs-validation"
    var forms = document.querySelectorAll('.needs-validation')
    // Por cada elemento seleccionado añadidemos un evento de submit que procera los datos escritos en dicho formulario
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log(event)
            if (form.checkValidity()) {
                // aca podemos mostrar una alerta
                let cuerpo = extraerDatos(event)
                enviarDatos(cuerpo)
            }
            form.classList.add('was-validated')
        }, false)
      })
});

function extraerDatos(event){
    let nombre = event.target[0].value
    let apellido = event.target[1].value
    let mascota = event.target[2].value
    let email = event.target[3].value
    let telefono = event.target[4].value
    let tipo_mascota = event.target[5].value
    let motivo = event.target[6].value
    let fecha = event.target[7].value
    let comentario = event.target[8].value
    return {nombre, apellido, mascota, email, telefono, tipo_mascota, motivo, fecha, comentario}
}
function enviarDatos(cuerpo){
    axios.post(
        URL,
        cuerpo,
        {
            headers: {
                apikey: SUPABASE_KEY,
                Authentication: "Bearer " + SUPABASE_KEY, 
                "Content-Type": "application/json",
                Prefer: "return=representation"
            }
    }).then(r=>{
        console.log(r)
    }).catch(e=>console.log(e.response))
}