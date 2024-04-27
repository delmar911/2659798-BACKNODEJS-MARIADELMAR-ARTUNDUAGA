function operacion(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number' ) {
                reject(new Error('Los valores deben ser números'));

            }else{
                let resultado = a+b
                resolve(resultado);
            }
        }, 2000);

    })

}

operacion(5,6).then(resultado =>{
    console.log(`el resultado es ${resultado}`);
}).catch(error=>{
    console.log("Hubo un error", error.message)
    
})