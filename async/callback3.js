function inicio(){
    console.log('Iniciando proceso...')
}

function fin(){
    console.log('...Terminando proceso')
}

function saludo(nombre, miCallback){
    setTimeout(
        () => {miCallback();
        console.log(`Hola ${nombre}`);
        },2000);  
}

function despedida(nombre, otroCallback){
    setTimeout(
        () => {console.log(`Adios ${nombre}`);
    otroCallback();}
    ,1000)
}

saludo('Hans',inicio);
despedida('Hans',fin);