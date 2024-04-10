import { Router } from 'express';

const router = Router(); // Se inicializa

// Rutas asociadas a la app
router.get('/create-order', (req, res) => res.send('Creating Order')) // Ruta para crear orden de pago
router.get('/success', (req, res) => res.send('success')) // Ruta para aceptar pago por el user
router.get('/webhook', (req, res) => res.send('Webhook')); // Ruta para el estado de la transacion

export default router 

