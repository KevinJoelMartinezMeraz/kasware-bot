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

  let client: MongoClient | null = null; // Definir la variable client fuera del bloque try

  try {
    // Verificar si se recibieron userId y userName
    if (!userId || !userName) {
      throw new Error('Falta userId o userName en el cuerpo de la solicitud');
    }

    // Conectar a la base de datos MongoDB
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();

    // Verificar si el usuario ya existe en la base de datos
    let existingUser = await db.collection<UserData>('users').findOne({ _id: userId });

    if (existingUser) {
      // Si el usuario ya existe y no está ganando puntos, actualizar la fecha de la última actualización y establecer gaining en true
      if (!existingUser.gaining) {
        await db.collection<UserData>('users').updateOne({ _id: userId }, { $set: { lastUpdate: new Date().toISOString(), gaining: true } });
      }
    } else {
      // Si el usuario no existe, agregar un nuevo documento con sus datos
      await db.collection<UserData>('users').insertOne({ _id: userId, name: userName, points: 300, lastUpdate: new Date().toISOString(), gaining: true });
    }

    res.status(200).json({ success: true, msg: `${userName} ahora estás acumulando puntos del canal👍` });
  } catch (error) {
    console.error('Error al guardar los puntos en MongoDB:', error);
    res.status(500).json({ error: 'Error al guardar los puntos en MongoDB' });
  } finally {
    // Cerrar la conexión con la base de datos si está abierta
    if (client) {
      await client.close();
    }
  }
}
