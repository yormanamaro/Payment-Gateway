import express from 'express';
import morgan from 'morgan';
import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';


const app = express() // Se inicializa 
app.use(morgan('dev'))
app.use(paymentRoutes); // Inicializacion del uso de rutas

app.listen(PORT);
console.log('Server on port', PORT); 