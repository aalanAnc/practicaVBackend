# practicaVBackend
ENUNCIADO:
Para esta practica se pide al alumno realizar una API Rest con mongoose, express y Deno para un restaurante.
Se pide los siguientes endpoints:
GET /client/id
GET /restaurant/id
DELETE /restaurant/id
DELETE restaurant -> Borra todos los restaurantes
POST /client -> Crea un cliente
POST /restaurant -> Crea un restaurante
POST /booking -> Crea una reserva
GET / booking/id
DELETE /booking/id

Los modelos de datos deberán ser exactamente del siguiente modo:
Client
firstName: obligatorio
lastName: obligatorio
email: obligatorio, unico, formato email
phoneNumber: único, formato teléfono
DNI: obligatorio, único, formato DNI
bookings: arrays con las reservas del usuario
Restaurante
name: obligatorio, único
CIF: obligatorio, único, formato
address: obligatorio,
bookings: arrays con las reservas del restaurante
Booking
date: opcional, por defecto el día de hoy
client: id client
restaurant: id restaurant

IMPORTANTE
Para esta practica, toda la lógica de borrado, búsqueda y validación se deberá hacer única y exclusivamente con mongoose usando validaciones y middleware
Mongoose v8.0.0: Validation
Mongoose v8.0.0: Middleware
Mongoose v8.0.0: Query Population
En caso de que no se usen estas funciones, esa parte del ejericio puntuara como un 0
Cosas a tener en cuenta:
Al añadir una reservar, en el middleware de guardar, se deberan actualizar las otras dos colecciones
Al borrar una reserva, se eliminaran de las otras dos colecciones
Al borar un cliente o un restauranete lo mismo que los dos puntos anteriores
Al buscar una reserva, se debera mostrar tambien el nombre del restaurante y del cliente y lo mismo con el resto de busquedas
