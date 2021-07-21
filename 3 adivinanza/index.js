// Vamos a crear una página para jugar a resolver una pregunta . Se espera que la misma:

// 1) Tenga dos span. El primero con una pregunta, o adivinanza. 
// El segundo inicialmente estará vacío. 
// Que tenga tres botones con posibles respuestas. 
// 2) Al clickear la respuesta correcta, el botón debe ponerse de color verde 
// 3) Una vez logrado 2, que ademas el texto del segundo span se actualice mostrando ¡Respuesta correcta!;
// 4) Una vez logrado el punto 3, si se clickea una respuesta incorrecta, se debe mostrar el botón con la 
// respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
//  5) Una vez logrado el punto 4, el texto del segundo span debe actualizarse mostrando ¡Respuesta equivocada!.

//selecciones de boton correcto y span
const botonCorrecto = document.querySelector(".botonDos");
const segundoSpan = document.getElementById ("correcto");

//selecciones de botones incorrectos

const botonIncorrecto = document.querySelector (".botonUno");
const botonIncorrecto2 = document.querySelector (".botonTres");

//funcion del boton correcto
const boton = ()=>{

    botonCorrecto.style.backgroundColor = ("green");
    segundoSpan.textContent = "¡Respuesta correcta!";
}

botonCorrecto.onclick = boton;



//botones incorrectos

const botonIncorrecto = document.querySelector (".botonUno");
const botonIncorrecto2 = document.querySelector (".botonTres");

const botonEquivocado = ()=> {
    if (botonIncorrecto.onclick){
        botonIncorrecto.style.backgroundColor = ("red");  
        botonCorrecto.style.backgroundColor = ("green"); 
        botonIncorrecto2.style.backgroundColor = ("red");
        segundoSpan.textContent = "¡Respuesta equivocada!";
    }
}

botonIncorrecto.onclick = botonEquivocado;
botonIncorrecto2.onclick = botonEquivocado;

//tenia dos funciones que hacian lo mismo y la saque para llamar con la misma funcion

// const botonEquivocado2 = () =>{
//     if (botonIncorrecto2.onclick){
//         botonIncorrecto.style.backgroundColor = ("red");  
//         botonCorrecto.style.backgroundColor = ("green"); 
//         botonIncorrecto2.style.backgroundColor = ("red");
//         segundoSpan.textContent = "¡Respuesta equivocada!";
         
//     }
// }


