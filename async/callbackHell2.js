function hola(nombre, callbackHola){
    setTimeout(() => {console.log(`Hola ${nombre}`);
        callbackHola(nombre); 
    },1000)
};

function hablar(callbackHablar){
    setTimeout(() => {console.log(`Bla bla bla bla...`);
        callbackHablar();
    },1000)
};

function adios(nombre){
    setTimeout(() => {console.log(`Adios ${nombre}`);
    console.log(`Proceso finalizado.`)
    },1000)
};

function conversacion(nombre,veces){
    if(veces > 0){ 
        hablar( () => {
            conversacion(nombre,--veces);
        });
    }else{
        adios(nombre)
    }
};

// Flujo del programa

console.log(`Iniciando proceso...`)

hola('Hans', (nombre) => {
    conversacion(nombre, 3)
});





