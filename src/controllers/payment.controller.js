// esto va a controlar los controladores de los pagos.
import mercadopago from "mercadopago";


export const createOrder = async (req, res) => {

  mercadopago.configure({ // Inicializamos la libreria dando acceso con el access token del vendedor de prueba 
    access_token: 
    "TEST-1594407712245850-041716-1730b2f4e201c3c551721854ef5b0e07-1772220151",
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Laptop Lenovo",
        unit_price: 500,
        currency_id: "CLP",
        quantity: 1,
      }
    ],
    back_urls: { // Esto lo que va hacer es retornar informacion luego de finalizada la transaccion.
      success: "https://localhost:3000/success",
      failure: "https://localhost:3000/failure",
      pending: "https://localhost:3000/pending",
    },
    notification_url: "https://localhost:3000/webhook"
  });

  console.log(result);
  
  res.send("creando orden")
};



export const receiveWebhook = (req, res) => {

  console.log(req.query);

  res.send("Webhook");
}