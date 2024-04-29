import express from 'express'; // importamos express para arrancar el servidor.
import morgan from 'morgan'; // importamos libreria para tirarlos mensajes por consola
import paymentRoutes from './routes/payment.routes.js'; // importamos archivo de las rutas.
import { PORT } from './config.js'; // importamos el puerto de conexion de backend
import path from 'path'; // esto es para decirle a express que va a usar un archivo estatico html dentro src


const app = express() // Se inicializa el servidor
app.use(morgan('dev')) // Para conocer en consola el mensaje de las peticiones.
app.use(paymentRoutes); // Inicializacion del uso de rutas

app.use(express.static(path.resolve('src/public'))); // Para ejecutar al inicio del proyecto.

app.listen(PORT); // Aqui pasamos el puerto del sevidor (PORT) configurado en config.js
console.log('Server on port', PORT); 