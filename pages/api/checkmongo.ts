import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// URI de conexión a MongoDB
const mongoURI = process.env.MONGODB_URI;

// Función para conectar a MongoDB
async function connectToMongoDB() {
  try {
    const client = new MongoClient(mongoURI);
    await client.connect();
    console.log('Conexión a MongoDB establecida correctamente');
    return client;
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    throw error; // Propaga el error para que pueda ser manejado en otro lugar
  }
}

// Ejemplo de uso de la función connectToMongoDB
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const dbClient = await connectToMongoDB();
    console.log("🚀 ~ handler ~ dbClient:", dbClient)
    // Realiza operaciones en la base de datos usando dbClient
    res.status(200).json({ success: true });

  } catch (error) {
    // Maneja el error de conexión a MongoDB
    res.status(500).json({ Error: error });

  }
}


