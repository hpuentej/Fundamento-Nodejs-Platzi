# Fundamento-Nodejs-Platzi

>## **Nodemon**
>Instalación: `npm install -g nodemon`

*`Se utiliza en el desarrollo.`*

Es un DEMON, proceso que está corriendo en paralelo a node y cuando detecte cambios vuelve a ejecutar todo el código.

**Código en WSL para usar Nodemon**

Ejecutar: `npx nodemon "archivo.js"`. De ser necesario en lugar de "archivo.js", colocar "carpeta/archivo.js".

  
>## **PM2**
>Instalación: `npm install -g pm2`

*`Se utiliza en el producción.`*

Es un administrador de procesos que ayuda a mantener una aplicación en línea las 24/7. Ej.
  
* Ejecutar la aplicación en cluster  
* Watch & Reload.  
* Monitorear la aplicación,etc.  
  
**Códigos para su uso**

Iniciar: `pm2 start "ubicación del archivo"`  
Cuadro de datos de la aplicación corriendo: `pm2 status`  
Ver ejecución de la aplicación: `pm2 logs`  
Finalizar: `pm2 stop`




