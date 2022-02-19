const URL = 'https://oqcomnhyainnbynjghlt.supabase.co/rest/v1/Pacientes?select=*';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xY29tbmh5YWlubmJ5bmpnaGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxNDg4NTUsImV4cCI6MTk2MDcyNDg1NX0.u5Tgiiox0fnyuOTFb_2ZBx4YlxieeaL9uXHe0VOCw-8'
/**
 * Función que permite preguntar a SupaBase los datos guardados en la tabla "Pacientes"
 * Recibe como argumento el cuerpo de la tabla previamente identificado por su atriburo "id"
 */
function getPacientes(cuerpo_tabla) {
    //Se usa la librería Axios para realizar las peticiones HTTP.
    axios.get(URL, {
        headers: {
            apikey: SUPABASE_KEY,
            Authentication: "Bearer " + SUPABASE_KEY
        }
    }).then(r => {
        //Cuando la petición se resulve, se procesarán los datos
        const datos = r.data;
        datos.forEach(element => {
            const row = `
        <tr>
          <th>${element.id}</th>
          <th>${element.nombre}</th>
          <th>${element.apellido}</th>
          <th>${element.mascota}</th>
          <th>${element.email}</th>
          <th>${element.telefono}</th>
          <th>${element.tipo_mascota}</th>
          <th>${element.motivo}</th>
          <th>${element.fecha}</th>
          <th>${element.comentario}</th>
        </tr>`
            cuerpo_tabla.innerHTML += row
        })
    }).catch(error => console.log(error.response))
}
window.addEventListener("DOMContentLoaded", function (event) {
    //Buscamos el cuerpo de la tabla por su "id"
    const cuerpo_tabla = document.getElementById("cuerpo-tabla");
    //Ejecutamos la función que rescatará los datos de SupaBase
    if (cuerpo_tabla) getPacientes(cuerpo_tabla);
})