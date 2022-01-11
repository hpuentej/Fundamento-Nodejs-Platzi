function inicio(){
    console.log('Iniciando proceso...')
}

function fin(){
    console.log('...Terminando proceso')
}

function saludo(nombre, miCallback){
    setTimeout(
        () => {console.log(`Hola ${nombre}`);
            miCallback();}
        ,2000);  
}

function despedida(nombre, otroCallback){
    setTimeout(
        () => {console.log(`Adios ${nombre}`);
    otroCallback();}
    ,2000)
}

saludo('Hans',inicio);
despedida('Hans',fin);