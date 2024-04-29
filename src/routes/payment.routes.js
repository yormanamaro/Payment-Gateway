import { Router } from 'express' // importam,os express pero su modulo {  Router } para crear rutas.
import { createOrder, receiveWebhook } from '../controllers/payment.controller.js'; // importamos los controladores

const router = Router(); // Se inicializa el modulo router de express.



// Creamos las rutas asociadas a la app
router.post('/create-order', createOrder) // Ruta para crear orden de pago (Cuando un usuario va a pagar)
router.get('/success', (req, res) => res.send("This is success")); // Ruta para aceptar pago por el user, cuando el user ya pago
router.get('/failure', (req, res) => res.send("This is failure")); // Esta es para cuando falla la transaccion 
router.get('/pending', (req, res) => res.send("This is pending")); // aqui es para cuando queda pendiente 
router.post('/webhook', receiveWebhook); // Para escuchar los eventos que lleguen de la transacion luego del pago.

export default router; 

