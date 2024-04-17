// esto va a controlar los controladores de los pagos.
import mercadopago from "mercadopago"; // Importamos libreria mercadopago


export const createOrder = async (req, res) => {

  mercadopago.configure({ // Inicializamos la libreria dando acceso con el access token del vendedor de prueba 
    access_token: 
    "TEST-1594407712245850-041716-1730b2f4e201c3c551721854ef5b0e07-1772220151",
  });

  const result = await mercadopago.preference.create({
    items: [
      {
        title: "Laptop Lenovo",
        unit_price: 500,
        currency_id: "USD",
        quantity: 1,
      }
    ]
  })

  console.log(result)
  
  res.send("creando orden")
};