import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  var cookieValueBody: { cookie: any; };
  var  cookieValueHeader: string;
  try {
      cookieValueBody = JSON.parse(req.body) as { cookie: string }; // Convertir el cuerpo de la solicitud a un objeto
      cookieValueHeader = req.headers['cookie'] as string; // Obtener el valor del parámetro Cookie desde el body
      const url = 'https://botrix.live//api/bot/commands';

    await axios.get(url, {
      headers: {
        'Cookie': cookieValueBody.cookie || cookieValueHeader // Configurar el encabezado Cookie con el valor de las cookies
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

      res.status(200).json({ success: true, result: formattedString });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ bodyParse:JSON.parse(req.body), ParamBodyLit: req.body, cookieValueBody: cookieValueBody, ParamHeader:req.headers, Error: error });

    });


  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error' });
  }
}
