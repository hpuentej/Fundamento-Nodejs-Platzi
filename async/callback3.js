function encuentro(nombre, cierrex){
    setTimeout( () =>{ 
        console.log('Iniciando proceso...');        
        console.log(`Hola ${nombre}`);                
        cierrex(nombre);}
        ,2000);  
}

function cierre(nombre){
    setTimeout(() =>{ 
        console.log(`Adios ${nombre}`);
        console.log('...Terminando proceso')}
        ,1000)
}

encuentro('Hans',cierre);

