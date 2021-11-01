# Proyecto API (Movie Club)

https://drs-proyecto-api.herokuapp.com/ // Api desplegada en Heroku.

https://drs-proyecto-api.herokuapp.com/docs/ // Documentación de la API generada en Swagger para facilidad de testeo.

Autor: Daniel Rodriguez.

Crédito adicional: 
José Marín: Por la base principal de la api sobre la cual desarrollé los nuevos endpoints y tablas.

## TECNOLOGIAS IMPLEMENTADAS:
![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)

## COMANDOS BÁSICOS
<br>

```
npm install // Para instalar las dependencias que requiere la API para funcionar correctamente.

sequelize db:create // Creará la base de datos a ser utilizada por la api.
sequelize db:migrate // Creará la estructura de tablas en la base de datos.

sequelize db:migrate:undo:all // Usar solo en caso de error al migrar las tablas para revertir los datos generados.

sequelize db:seed:all // Este comando utilizará los seeders de prueba en la api para generar datos ficticios en cada tabla.

sequelize db:seed:undo:all // Usar solo en caso de error al generar los seeds para revertir los datos generados.
```

## END-POINTS

```

#### Register
POST - localhost:3000/users/signup - { "name": "root", "email": "root@email.com",  "password": "password", "city": "city" }

#### Login
POST - localhost:3000/users/signin - { "email": "root@email.com",  "password": "password" }

#### Home
GET - localhost:3000 // Confirmación de funcionamiento de la api.
```
```
#### Movies
GET - localhost:3000/movies // Busca todas las películas en la DB.
GET - localhost:3000/movies/:id // Busca una película por su Id, que es requerido por parámetro.
GET - localhost:3000/movies/name/:title // Busca una película por su nombre, que es requerido por parámetro.
GET - localhost:3000/movies/genre/:genre // Busca todas las películas cuyo genero sea igual al requerido por parámetro.
GET - localhost:3000/movies/cast/:cast // Busca todas las películas cuyo reparto sea igual al requerido por parámetro.
GET - localhost:3000/movies/city/:city // Busca todas las películas cuya ciudad en donde esté disponible sea igual a la requerida por parámetro.
POST - localhost:3000/movies // Crea una nueva película.
PUT - localhost:3000/movies:id // Actualiza los atributos de una película cuyo id es requerido por parámetro.
DELETE - localhost:3000/movies // Elimina todas las películas en la DB.
DELETE - localhost:3000/movies:id // Elimina una película cuyo id es requerido por parámetro.
```
```
#### Users
GET - localhost:3000/users Busca todos los usuarios en la DB.
GET - localhost:3000/users/:id // Busca un usuario por su Id, que es requerido por parámetro.
GET - localhost:3000/users/city/:city // Busca todos los usuarios cuya ciudad de residencia sea igual a la requerida por parámetro.
POST - localhost:3000/users/signup // Crea un nuevo usuario en la DB, y a su vez le genera un token de acceso para poder utilizar la API.
POST - localhost:3000/users/signin // Inicia la sesión de un usuario, lo que permitirá recibir el token de acceso para poder utilizar la API.
DELETE - localhost:3000/users // Elimina todos los usuarios de la DB.
DELETE - localhost:3000/users:id // Elimina un usuario cuyo id es requerido por parámetro.
```
```
#### Orders
GET - localhost:3000/orders Busca todos los pedidos en la DB.
GET - localhost:3000/orders/:id // Busca un pedido por su Id, que es requerido por parámetro.
POST - localhost:3000/orders/ // Crea un nuevo pedido en la DB. Solo se puede generar un pedido en donde la ciudad del usuario y la de disponibilidad de la película sea la misma, de lo contrario, no podrá generarse un pedido.
PUT - localhost:3000/orders/:id // Modifica un pedido pasando por parámetros el id del usuario y el id de la película.
DELETE - localhost:3000/orders // Elimina todos los pedidos de la DB.
DELETE - localhost:3000/orders:id // Elimina un pedido de la DB cuyo id es requerido por parámetro.
```
