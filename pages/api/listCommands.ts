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

      const formattedString = array
      .filter((command: any) => command.trovo === 1) // Filtrar solo los elementos con command.trovo === 1
      .sort((a: any, b: any) => a.price - b.price) // Ordenar los elementos de menor a mayor basado en command.price
      .map((command: any) => `${command.cmd}__${command.price}`)
      .join(", ");   

      res.status(200).json({ success: true, result:formattedString });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ Params:{ cookieValueBody, cookieValueHeader}, ParamBody: req.body, ParamHeader:req.headers, Error: error });

    });


  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error' });
  }
}
