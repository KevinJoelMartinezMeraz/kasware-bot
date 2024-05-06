import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import fetch from 'node-fetch'; // Importar fetch para realizar la solicitud GET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cookieValueBody = req.body.cookie as string; // Obtener el valor del parámetro Cookie desde el body
    const cookieValueHeader = req.headers['cookie'] as string; // Obtener el valor del parámetro Cookie desde el body
    const url = 'https://botrix.live//api/bot/commands';
    //const cookieValueLocal = 'PHPSESSID=8vkbpd3do0gfnl54h4h7hqtddp; __cflb=0H28vfqCbGqPR2xdBTLKSacC9CsbqZNVQ7UPaZWoHf9; token=true; platform=youtube; premium=2';

    await axios.get(url, {
      headers: {
        'Cookie': cookieValueBody || cookieValueHeader // Configurar el encabezado Cookie con el valor de las cookies
      }
    })
    .then(response => {
      // Manejar la respuesta aquí
      const array = response.data;
      console.log("- ~ handler ~ response:", response)

    // Filtrar los objetos con la propiedad "trovo" igual a 1
    const filteredCommands = array.filter((command: any) => command.trovo === 1);

    // Crear un nuevo array con las propiedades "cmd", "price" y "delay"
    const resultArray = filteredCommands.map((command: any) => ({
      cmd: command.cmd,
      price: command.price,
      delay: command.delay
    }));
    res.status(200).json({ success: true, result:resultArray });

    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ Error: error });

    });


  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error' });
  }
}
