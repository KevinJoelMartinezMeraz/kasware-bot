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
  const currentTime = new Date().getTime(); // Obtener el tiempo actual en milisegundos

  let client: MongoClient;

  try {
    // Conectar a la base de datos MongoDB
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();

    // Buscar al usuario en la base de datos por su ID único
    const userData = await db.collection<UserData>('users').findOne({ _id: userId });

    // Si el usuario no existe, devolver un error
    if (!userData) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    if (!userData.gaining) {
      const msg = 'Usuario no ha registrado watch :(';
      res.status(200).json({ success: true, msg });
      return;
    }

    // Calcular la diferencia de tiempo desde el último registro hasta ahora (en milisegundos)
    const lastUpdate = new Date(userData.lastUpdate).getTime();
    const elapsedTime = currentTime - lastUpdate;

    // Calcular los puntos ganados en función del tiempo transcurrido (220 puntos por hora)
    const earnedPoints = Math.floor(elapsedTime / (1000 * 60)) * 3.67;

    // Actualizar los puntos del usuario y la fecha de último registro en la base de datos
    const updatedPoints = userData.points + earnedPoints;
    await db.collection<UserData>('users').updateOne({ _id: userId }, { $set: { points: updatedPoints, lastUpdate: new Date().toISOString() } });

    res.status(200).json({ success: true, msg: `Puntos ganados: ${updatedPoints} pts.` });
  } catch (error) {
    console.error('Error al verificar los puntos en MongoDB:', error);
    res.status(500).json({ error: 'Error al verificar los puntos en MongoDB' });
  } finally {
    // Asegurarse de cerrar la conexión después de usarla
    if (client) {
      await client.close();
    }
  }
}
