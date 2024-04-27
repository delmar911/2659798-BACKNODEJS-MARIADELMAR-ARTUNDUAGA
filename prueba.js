//ejemplo 1

//los callbacks se utilizan para controlar el flujo de nuestro programa
//se pone callback para que traiga un parametro
const fun1 = (callback) =>{//funcion de flecha
  console.log('Inicio');
  console.log('fin');
  callback();//se indica que es una funcion... El callback es fun1(fun2)
}

const fun2 = () =>{
  console.log('Proceso intermedio');
}

fun1(fun2);//llamada a la primera funcion con la segunda como parametro

//ejercicio 2
function sumar(num1, num2, respuesta) {
  var suma = num1 + num2;
  respuesta(suma);//este es el callback
}


sumar(10, 3, function(resultado) {
  console.log("La suma es: " + resultado);
});