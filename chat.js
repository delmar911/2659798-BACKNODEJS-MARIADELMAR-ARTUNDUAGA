function respuesta(pregunta){
    return new Promise((resolve, reject)=>{
             
         setTimeout(() => {
            
            if (pregunta == "¿Cuál es el nombre del lenguaje de programación que se utiliza en este curso?"){
                resolve("El nombre del lenguaje de programación utilizado en este curso es JavaScript");
            }else{
                 reject(`No estoy seguro sobre la pregunta "${pregunta}"`); 
             }
          },2000)    
     })  
}


respuesta('¿Cuál es el nombre del lenguaje de programación que se utiliza en este curso?')
.then(respuesta=>console.log(respuesta) )
.catch(error=> console.log(`Error: ${error}`));
            


