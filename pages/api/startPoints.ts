// api/savePoints.ts

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
  const lastUpdate = new Date().toISOString(); // Se obtiene la fecha actual en formato ISO
  let points = 300;
  const gaining = true;
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
    const existingUserIndex = userDataList.findIndex((userData) => userData.name === name);

    // Si el usuario ya existe
    if (existingUserIndex !== -1) {
      // Si el usuario no está ganando puntos actualmente, actualiza la fecha de la última actualización y establece gaining en true
      if (!userDataList[existingUserIndex].gaining) {
        userDataList[existingUserIndex].lastUpdate = lastUpdate;
        userDataList[existingUserIndex].gaining = true;
      }
    } else {
      // Si el usuario no existe, agregar un nuevo objeto con sus datos
      userDataList.push({ name, points, lastUpdate, gaining });
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
