/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const uri: string = process.env.MONGODB_URI || '';
const dbName: string = process.env.MONGODB_DB || '';

const connection: any  = {};

if (!uri) {
	throw new Error(
		'Por favor, defina MONGODB_URI dentro das variáveis de ambiente .env.local'
	);
}

if (!dbName) {
	throw new Error(
		'Por favor, defina MONGODB_DB dentro das variáveis de ambiente .env.local'
	);
}

async function dbConnect():Promise<void>{

	if (connection.isConnected) {
		return;
	}
	try {
		mongoose.set('useCreateIndex', true);
		const db = await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		connection.isConnected = db;

	} catch (error) {
		throw new Error(
			'Problema na conexão com mongoose'
		);
	}
    
}

export default dbConnect;