## Bienvenido a la documentación de mi prueba tecnica para ADS

## Instalar paquetes necesarios

`npm i`

## Para conectar la Base de datos

Es necesario tener MongoDb instalado y una base de datos creada, por defecto mongo utiliza "test" y la app está configurada para usar esa.

Inicia una terminal (cmd) y ejecuta `mongod` esto iniciará el servidor de la base de datos.

Iniciar una segunda terminal y ejecuta `mongosh` esto te permitirá ver en consola la shell de Mongo y con el comando 'db' ver las bases de datos disponibles (deberías poder ver `test`)

## Para Correr el proyecto

`node index.js`

## Para operar la base de datos

Se recomienda utilizar Postman para realizar las operaciones (GET, POST, GET/:ID, PUT, DELETE).

En postman utilizar la URL: http://localhost:3002/articles/

Y como body para el POST puedes utilizar:

{
  "name": "Nombre de producto",
  "description": "Descripcion de producto",
  "price": 9.99, 
  "stock": 10, 
  "category": "Electronica" 
}


