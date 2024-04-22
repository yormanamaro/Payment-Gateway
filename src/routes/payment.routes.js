import { Router } from 'express'
import { createOrder } from '../controllers/payment.controller.js';

const router = Router() // Se inicializa

// Rutas asociadas a la app
router.get('/create-order', createOrder) // Ruta para crear orden de pago
router.get('/success', (req, res) => res.send("seccess")); // Ruta para aceptar pago por el user
router.get('/failure', (req, res) => res.send("failure")); // Esta ruta es para regresarnos informacion adicional de la transacion
router.get('/pending', (req, res) => res.send("pending")); //
router.get('/webhook', (req, res) => res.send("Webhook")); // Ruta para escuchar los eventos que lleguen de la transacion

export default router; 

