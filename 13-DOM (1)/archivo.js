/*let datos = document.getElementById ('btn_enviar')
datos.addEventListener("click",()=>{
 alert('todos los datos');

//});*/
/*
document.querySelector ('registerForm')
 .addEventListener ('submit', (e) => {

    e.preventDefault
    const datos = Object.fromEntries(
        new FormData (e.target)
    )
    alert(JSON.stringify(datos));
 });
*/
//primer ejercicio normal para que cuando llene el formulario retorne los valores en una pagina
/*
const mes = document.getElementById ('mes');
const año = document.getElementById ('año');
const trimestre = document.getElementById('trimestre');
const competencia = document.getElementById('competencia');
const ganar = document.getElementById ('seleccionar1');
let datos = document.getElementById ('submit');
const perder = document.getElementById ('seleccionar2');*/
/*
datos.addEventListener("click",(mes,año,trimestre,competencia,seleccionar1,seleccionar2)=>{
    
   document.createElement(
        `Mes: ${mes}\nAño: ${año}\nTrimestre: ${trimestre}\nCompetencia: ${competencia}\nSeleccionado 1: ${seleccionar1}\nSeleccionado 2: ${seleccionar2}`
        
    );








/*
    if (ganar.checked) {

        document.write(`el mes ${mes.value} 
        del año ${año.value} del trimestre ${trimestre.value} en la competencia ${competencia.value} fue ${ganar.value}`)
    }
        else { document.write(`el mes ${mes.value} 
    del año ${año.value} del trimestre ${trimestre.value} en la competencia ${competencia.value} fue ${perder.value}`)}*/


//});*/

/*
        
function datos() {
    // Obtener los valores de los campos
    const mes = document.getElementById('mes').value;
    const año = document.getElementById('año').value;
    const trimestre = document.getElementById('trimestre').value;
    const competencia = document.getElementById('competencia').value;
    const seleccionar1 = document.querySelector('input[name="gridRadios"]:checked').value;
    const seleccionar2 = document.querySelector('input[name="gridRadios"]:not(:checked)').value;

    // Mostrar los valores en la consola
    console.log('Mes:', mes);
    console.log('Año:', año);
    console.log('Trimestre:', trimestre);
    console.log('Competencia:', competencia);
    console.log('Seleccionado 1:', seleccionar1);
    console.log('Seleccionado 2:', seleccionar2);

    // También puedes mostrar los valores en una ventana emergente (alert)
    alert(
        `Mes: ${mes}\nAño: ${año}\nTrimestre: ${trimestre}\nCompetencia: ${competencia}\nSeleccionado 1: ${seleccionar1}\nSeleccionado 2: ${seleccionar2}`
    );}*/
    function datos(mes, año, trimestre, competencia){

        let mensaje = (`Mes: ${mes}\nAño: ${año}\nTrimestre: ${trimestre}\nCompetencia: ${competencia} `);
       
        let mensajefinal=document.getElementById("parrafo").textContent=mensaje;

       
       /* alert( `Mes: ${mes}\nAño: ${año}\nTrimestre: ${trimestre}\nCompetencia: ${competencia}`
                );*/
        
    }



     // Convertir los valores en vectores (arrays)
     const datosArray = [mes, año, trimestre, competencia];

     // Mostrar los valores en el párrafo
     mostrarDatos(datosArray);
 

 function mostrarDatos(datos) {
     let mensaje = `Mes: ${datos[0]}\nAño: ${datos[1]}\nTrimestre: ${datos[2]}\nCompetencia: ${datos[3]}`;
     document.getElementById("parrafo").textContent = mensaje;
 }