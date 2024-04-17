import { Router } from 'express';
import { createOrder } from '../controllers/payment.controller.js';

const router = Router(); // Se inicializa

// Rutas asociadas a la app
router.post("/create-order", createOrder) // Ruta para crear orden de pago
router.get('/success') // Ruta para aceptar pago por el user
router.post('/webhook'); // Ruta para el estado de la transacion

export default router; 

