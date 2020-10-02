# Examen Supletorio: Tópicos Especiales

## Tema: DESARROLLO DE UNA APLICACIÓN TIPO CHAT CON UNA FIREBASE FUNCTION

#### Enlace: ![youtube](https://youtu.be/PkbR11zOpss)

Resumen:
En este documento se presentan los resultados del examen supletorio con una aplicación desarrollada en Ionic Angular y Firebase function, así también como el despliegue de su APK.

### I.  CREAR PROYECTO EN FIREBASE

Creamos un proyecto en la consola de Firebase.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_1.png)

Generando la base de datos en Cloud Firestore y agregando una colección y sus 20 documentos al momento.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_2.png)

La colección que va a generar rondara el tema de vehículos y propietario.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_3.png)

### II.  TEST DEL BACKEND CON UNA APP EN IONIC (ANGULAR)

Crear una app en Ionic con el siguiente comando:

----------------------------------------------
$ ionic start [nombreApp] blank -–type:angular
// nombreApp: ConsultaCar

--------------------------------------
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_4.PNG)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_5.PNG)

Se vincula la aplicación en Ionic con Firebase, registrando la app en la consola y obteniendo los datos del SDK para ingresarlos en nuestra app.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_6.png)

En el archivo “environment.ts” de la aplicación registrar los campos del vínculo con Firebase, abriendo para esta un editor de texto que en este caso es Visual Studio Code.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_7.png)

Pegando los datos de la siguiente manera.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_8.png)

Para esto se genera un servicio con el siguiente comando:
$ ionic g s services/firebase
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_9.png)

Con el siguiente contenido que importa la conexión con Firestore y la interfaz que será generada.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_10.PNG)

Para después pasar a generar las funciones del CRUD.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_11.PNG)

Luego generar una interfaz que representa os campos de los datos alojados en la Cloud Firestore.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_12.PNG)

### III.  RESULTADOS IONIC ANGULAR


Ejecutar los siguientes comandos para visualizar el laboratorio de ionic.

---------------------------
$ npm i @ionic/lab --save-dev
$ ionic serve -l

-------------------------
Lista de vehículos con evento clic para editar, visualizar los detalles y agregar otro documento.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_13.png)

Detalles del vehículo del propietario para editar, guardar y eliminar.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_14.png)

Menú desplegable para navegar entre diferentes ventanas.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_15.png)

Ventana de Chat bot para hacer consultas a la base de datos a través de una Firebase Function.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_16.png)

### IV.  FIREBASE FUNCTION

Antes de inicializar se prepara el entorno de firebase con el siguiente comando:

---------------------------------
$ npm install g firebase-tools

---------------------------------
Para inicializar una Firebase function lo haremos con el siguiente comando:

---------------------
$ firebase login

---------------------
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f1.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f2.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f3.jpg)

--------------------
$ firebase init

------------------
Luego seguimos los pasos a continuación:

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f4.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f5.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f6.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f7.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f8.jpg)

Generando la siguiente función en el archivo index.ts.
![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_f9.jpg)

![captura](https://github.com/EddRick96/appMovil/blob/master/capturas/img_17.PNG)

---------------------------
Una vez generada nuestra función ingresar el siguiente comando para pasar de typescript a javascript.

------------------
$ npm run build

------------------
El comando para probar de manera local nuestra función es el siguiente:

-----------------
$ firebase serve

----------------
Generando un API:
http://localhost:5000/finalapimusic/us-central1/addMessage

