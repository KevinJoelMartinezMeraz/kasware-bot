// api/checkPoints.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface UserData {
  name: string;
  points: number;
  lastUpdate: string; // Puede ser de tipo Date si se desea trabajar con fechas en JS
  gaining: boolean; // Identifica si el usuario está generando puntos
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = req.headers['user'] as string;
  const currentTime = new Date().getTime(); // Obtener el tiempo actual en milisegundos
  // Ruta al archivo JSON
  const filePath = path.join(process.cwd(), 'public', 'points_data.json');

  // Leer el archivo JSON
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Error al leer el archivo JSON:', err);
      res.status(500).json({ error: 'Error al leer el archivo JSON' });
      return;
    }

    let userDataList: UserData[] = [];
    if (!err) {
      try {
        // Convertir el contenido del archivo JSON a un array de objetos
        userDataList = JSON.parse(data);
      } catch (error) {
        console.error('Error al analizar el contenido JSON:', error);
        res.status(500).json({ error: 'Error al analizar el contenido JSON' });
        return;
      }
    }

    // Si userDataList no es un array, inicialízalo como un array vacío
    if (!Array.isArray(userDataList)) {
      userDataList = [];
    }

    // Buscar si el usuario ya existe en el archivo
    const userIndex = userDataList.findIndex((userData) => userData.name === name);

    // Si el usuario no existe, devolver un error
    if (userIndex === -1) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    if (!userDataList[userIndex].gaining) {
        const msg= 'Usuario no ha registrado watch :('
        res.status(200).json({ success: true, msg });
        return;
    }

    // Calcular la diferencia de tiempo desde el último registro hasta ahora (en milisegundos)
    const lastUpdate = new Date(userDataList[userIndex].lastUpdate).getTime();
    const elapsedTime = currentTime - lastUpdate;

    // Calcular los puntos ganados en función del tiempo transcurrido (220 puntos por hora)
    const earnedPoints = Math.floor(elapsedTime / (1000 * 60)) * 3.67;

    // Actualizar los puntos del usuario y la fecha de último registro
    userDataList[userIndex].points += earnedPoints;
    userDataList[userIndex].lastUpdate = new Date().toISOString();

    // Escribir el archivo JSON actualizado
    fs.writeFile(filePath, JSON.stringify(userDataList, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo JSON:', err);
        res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
        return;
      }

      res.status(200).json({ success: true, earnedPoints });
    });
  });
}
