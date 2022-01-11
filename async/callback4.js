// Copia exacta de la parte final de la clase

function hola(nombre, micallback) {
    setTimeout(function() {
      console.log("Hello, " + nombre);
      micallback(nombre);
    }, 1500);
  }
  
function adios(nombre, otrocallback) {
    setTimeout(function() {
      console.log("Adios", nombre);
      otrocallback();
    }, 1000);
  }
  
console.log("Iniciando");

hola("Hans", function(nombre) {
    adios(nombre, function() {
      console.log("Terminando");
    });
  });
  