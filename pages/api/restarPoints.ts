// api/subtractPoints.ts

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
  const userName = req.query.user as string;
  const pointsToSubtract = parseInt(req.query.points as string);

  if (!userName || !pointsToSubtract || isNaN(pointsToSubtract)) {
    res.status(400).json({ error: 'Parámetros incorrectos' });
    return;
  }

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

    // Buscar el usuario en la lista
    const userIndex = userDataList.findIndex((userData) => userData.name === userName);

    // Si el usuario no existe, devolver un error
    if (userIndex === -1) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    // Restar los puntos al usuario
    userDataList[userIndex].points -= pointsToSubtract;

    // Verificar que los puntos no sean negativos
    if (userDataList[userIndex].points < 0) {
      userDataList[userIndex].points = 0;
    }

    // Escribir el archivo JSON actualizado
    fs.writeFile(filePath, JSON.stringify(userDataList, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo JSON:', err);
        res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
        return;
      }

      res.status(200).json({ success: true });
    });
  });
}
