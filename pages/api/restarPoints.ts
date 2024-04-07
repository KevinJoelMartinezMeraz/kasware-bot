// api/subtractPoints.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

interface UserData {
  _id: string; // ID único del usuario
  name: string;
  points: number;
  lastUpdate: string;
  gaining: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.body.userId as string; // Cambiar a req.body para recibir los parámetros
  const pointsToSubtract = parseInt(req.body.points as string); // Cambiar a req.body para recibir los parámetros
  const currentTime = new Date().getTime(); // Obtener el tiempo actual en milisegundos

  try {
    // Conectar a la base de datos MongoDB
    // @ts-ignore
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();

    // Buscar al usuario en la base de datos por su ID único
    const userData = await db.collection<UserData>('users').findOne({ _id: userId });

    // Si el usuario no existe, devolver un error
    if (!userData) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    // Calcular la diferencia de tiempo desde el último registro hasta ahora (en milisegundos)
    const lastUpdate = new Date(userData.lastUpdate).getTime();
    const elapsedTime = currentTime - lastUpdate;

    // Calcular los puntos ganados en función del tiempo transcurrido (220 puntos por hora)
    const earnedPoints = Math.floor(elapsedTime / (1000 * 60)) * 3.67;
    const currentPoints = userData.points + earnedPoints;
    
    // Restar los puntos al usuario y asegurarse de que no sean negativos
    const updatedPoints = Math.max(currentPoints - pointsToSubtract, 0);

    // Actualizar los puntos del usuario en la base de datos
    await db.collection<UserData>('users').updateOne({ _id: userId }, { $set: { points: updatedPoints } });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al restar puntos en MongoDB:', error);
    res.status(500).json({ error: 'Error al restar puntos en MongoDB' });
  }
}
