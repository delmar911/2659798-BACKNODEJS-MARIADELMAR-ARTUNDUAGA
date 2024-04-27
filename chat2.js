// function respuesta(pregunta) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             switch (pregunta) {
//                 case "¿Cuál es el nombre del lenguaje de programación que se utiliza en este curso?":
//                     resolve("El nombre del lenguaje de programación utilizado en este curso es JavaScript");
//                     break;
//                 case "¿Cuál es la capital de Francia?":
//                     resolve("La capital de Francia es París.");
//                     break;
//                 case "¿Quién escribió 'Romeo y Julieta'?":
//                     resolve("La obra 'Romeo y Julieta' fue escrita por William Shakespeare.");
//                     break;
//                 default:
//                     reject(`No tengo información sobre la pregunta "${pregunta}"`);
//             }
//         }, 4000); // Intervalo de 4 segundos antes de responder
//     });
// }

// // Ejemplos de llamadas a la función respuesta y manejo de las promesas
// respuesta('¿Cuál es el nombre del lenguaje de programación que se utiliza en este curso?')
//     .then(respuesta => {
//         setTimeout(() => {
//             alert(respuesta);
//         }, 4000);
//     })
//     .catch(error => {
//         setTimeout(() => {
//             alert(`Error: ${error}`);
//         }, 4000);
//     });

// respuesta('¿Cuál es la capital de Francia?')
//     .then(respuesta => {
//         setTimeout(() => {
//             alert(respuesta);
//         }, 8000); // Aumento el intervalo para mostrar la respuesta 4 segundos después de la primera pregunta
//     })
//     .catch(error => {
//         setTimeout(() => {
//             alert(`Error: ${error}`);
//         }, 8000);
//     });

// respuesta('¿Quién escribió "Romeo y Julieta"?')
//     .then(respuesta => {
//         setTimeout(() => {
//             alert(respuesta);
//         }, 12000); // Aumento el intervalo para mostrar la respuesta 4 segundos después de la segunda pregunta
//     })
//     .catch(error => {
//         setTimeout(() => {
//             alert(`Error: ${error}`);
//         }, 12000);
//     });

function respuesta(pregunta) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (pregunta) {
                case "¿Cuál es el nombre del lenguaje de programación que se utiliza en este curso?":
                    resolve("El nombre del lenguaje de programación utilizado en este curso es JavaScript");
                    break;
                case "¿Cuál es la capital de Francia?":
                    resolve("La capital de Francia es París.");
                    break;
                case "¿Quién escribió 'Romeo y Julieta'?":
                    resolve("La obra 'Romeo y Julieta' fue escrita por William Shakespeare.");
                    break;
                default:
                    reject(`No tengo información sobre la pregunta "${pregunta}"`);
            }
        }, 4000); // Intervalo de 4 segundos antes de responder
    });
}

async function mostrarRespuesta(pregunta) {
    try {
        const respuestaTexto = await respuesta(pregunta); // Cambio el nombre de la variable
        const conversacionElement = document.getElementById('conversacion');
        const mensajePregunta = document.createElement('p');
        mensajePregunta.textContent = `Pregunta: ${pregunta}`;
        const mensajeRespuesta = document.createElement('p');
        mensajeRespuesta.textContent = `Respuesta: ${respuestaTexto}`; // Utilizo el nombre nuevo
        conversacionElement.appendChild(mensajePregunta);
        conversacionElement.appendChild(mensajeRespuesta);
        alert(respuestaTexto);
    } catch (error) {
        alert(`Error: ${error}`);
    }
}

// Ejemplos de llamadas a la función mostrarRespuesta
mostrarRespuesta('¿Cuál es el nombre del lenguaje de programación que se utiliza en este curso?');
mostrarRespuesta('¿Cuál es la capital de Francia?');
mostrarRespuesta('¿Quién escribió "Romeo y Julieta"?');