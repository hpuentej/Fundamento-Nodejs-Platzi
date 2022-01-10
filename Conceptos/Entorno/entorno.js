//Ejemplo 1

// let nombre = process.env.NOMBRE || 'Sin nombre';
// let web = process.env.WEB_JUNIOR || 'No tengo Web';

// console.log(`Hola ${nombre}`);
// console.log(`Mi web es ${web}`);

/*Llamado en node (terminal):
NOMBRE=Pamela WEB_JUNIOR=Inicio2 node Conceptos/entorno.js*/

//Ejemplo 2

const lista = process.env.MI_LISTA.split(',') ?? 'Lista vacia';
console.log(lista);

/*Llamado en node (terminal):
MI_LISTA='abc' MI_LISTA=a,b,c node Conceptos/Entorno/entorno.js*/