import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';

interface UserData {
  name: string;
  points: number;
  lastUpdate: string;
  gaining: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Conectar a la base de datos MongoDB
    // @ts-ignore
    const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db();

    // Establecer la propiedad gaining en false para todos los usuarios en la base de datos
    await db.collection<UserData>('users').updateMany({}, { $set: { gaining: false } });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al detener la ganancia en MongoDB:', error);
    res.status(500).json({ error: 'Error al detener la ganancia en MongoDB' });
  }
}
