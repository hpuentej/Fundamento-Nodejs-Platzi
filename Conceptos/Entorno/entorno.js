//Ejemplo 1

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB_JUNIOR || 'No tengo Web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);

/*Llamado en node (terminal):
NOMBRE=Pamela WEB_JUNIOR=Inicio2 node Conceptos/entorno.js*/

//Ejemplo 2

