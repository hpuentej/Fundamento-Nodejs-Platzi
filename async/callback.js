function despedida(){
  console.log('Terminando proceso');
};

function soyAsíncrona(miCallback){  
  setTimeout(() => {console.log('Yo sí soy asíncrona');
  miCallback();},2000)   
};

console.log('Iniciando proceso')
soyAsíncrona(despedida);


 