// api/savePoints.ts

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
  const { userId, userName } = req.body; // Recibir userId y userName del cuerpo de la solicitud
  const lastUpdate = new Date().toISOString();
  const points = 300;
  const gaining = true;

  // Verificar si se recibieron userId y userName
  if (!userId || !userName) {
    res.status(400).json({ error: 'Falta userId o userName en el cuerpo de la solicitud' });
    return;
  }

  try {
    // Conectar a la base de datos MongoDB
    // @ts-ignore
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await db.collection<UserData>('users').findOne({ _id: userId });

    if (existingUser) {
      // Si el usuario ya existe y no está ganando puntos, actualizar la fecha de la última actualización y establecer gaining en true
      if (!existingUser.gaining) {
        await db.collection<UserData>('users').updateOne({ _id: userId }, { $set: { lastUpdate, gaining } });
      }
    } else {
      // Si el usuario no existe, agregar un nuevo documento con sus datos
      await db.collection<UserData>('users').insertOne({ _id: userId, name: userName, points, lastUpdate, gaining });
    }

    res.status(200).json({ success: true, msg: `${userName} ahora estás acumulando puntos del canal👍` });
  } catch (error) {
    console.error('Error al guardar los puntos en MongoDB:', error);
    res.status(500).json({ error: 'Error al guardar los puntos en MongoDB' });
  }
}
