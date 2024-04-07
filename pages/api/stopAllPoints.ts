import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

interface UserData {
  name: string;
  points: number;
  lastUpdate: string;
  gaining: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | null = null; // Definir la variable client fuera del bloque try

  try {
    // Conectar a la base de datos MongoDB
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();

    // Establecer la propiedad gaining en false para todos los usuarios en la base de datos
    await db.collection<UserData>('users').updateMany({}, { $set: { gaining: false } });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al detener la ganancia en MongoDB:', error);
    res.status(500).json({ error: 'Error al detener la ganancia en MongoDB' });
  } finally {
    // Asegurarse de cerrar la conexión después de usarla
    await client.close();
  }
}
