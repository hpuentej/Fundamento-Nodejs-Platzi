// Creación de funciones del programa

function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

/*En esta parte del código uso funciones recursivas
porque estoy llamando a conversacion dentro de si
misma. y mediante un If como estructura de control
le digo que cantidad de veces va a  ejectuarse la 
funcion hablar.*/

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// -Ejecución del programa-+
console.log('Iniciando proceso...');

hola('Hans', valorx => {
    conversacion(valorx, 2, () => {
        console.log('Proceso terminado');
    });
});

/************************HELL*********************
 hola('Alejandro', function (nombre) {
     hablar(function () {
         hablar(function () {
             hablar(function () {
                 adios(nombre, function() {
                     console.log('Terminando proceso...');
                 });
             });
         });
     });
 }); */