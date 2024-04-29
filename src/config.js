import { config } from 'dotenv'
config();

export const PORT = 4000; // Determinamos en una variable el numero de puerto del backend  
export const HOST = `http://localhost:${PORT}`;

export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY; // para traerme el nombre de la variable de entorno

console.log(MERCADOPAGO_API_KEY)