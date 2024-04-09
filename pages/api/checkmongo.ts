import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client: MongoClient | null = null;

  try {
    // Conectar a la base de datos MongoDB
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    // Si la conexión se establece correctamente, responder con éxito
    res.status(200).json({ success: true });
  } catch (error) {
    // Si hay un error al conectar, responder con un error
    console.error('Error al conectar con MongoDB:', error);
    res.status(500).json({ error: 'Error al conectar con MongoDB' });
  } finally {
    // Asegurarse de cerrar la conexión después de usarla
    if (client) {
      await client.close();
    }
  }
}
