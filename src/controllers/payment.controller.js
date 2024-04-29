// esto va a controlar los controladores de los pagos.
import mercadopago from "mercadopago"; // importamos la libreria de mercadopago
import { HOST, MERCADOPAGO_API_KEY } from "../config.js"; // importamos las variables de entorno



// Creaamos la funcion que va a hacer la orden de pago y se va a conectar con mercadopago
export const createOrder = async (req, res) => { // 

  mercadopago.configure({ // Inicializamos la libreria y la configuramos con su metodo (configuere) 
    access_token: MERCADOPAGO_API_KEY,
  });

  const result = await mercadopago.preferences.create({ // Aqui creamos la orden de compra como tal
    items: [
      {
        title: "Laptop Lenovo",
        unit_price: 500,
        currency_id: "CLP",
        quantity: 1,
      }
    ],
    back_urls: { // Esto lo que va hacer es retornar informacion luego de finalizada la transaccion.
      success: `${HOST}/success`,
      failure: `${HOST}/failure`,
      pending: `${HOST}/pending`,
    },
    notification_url: "https://02d9-190-100-219-157.ngrok-free.app/webhook", // Para cuando el pago este hecho para las notificaciones
  }); // Esa web es la que nos proporciona ngrok como https para la respuesta

  console.log(result);
  
  res.send(result.body);
};



export const receiveWebhook = async (req, res) => { // Luego de realizada la transacción mercadopago regresa la informacion 
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};