import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://Jdibbert:11Jamie11@projectquizz.vizvj.mongodb.net/schwizz?retryWrites=true&w=majority');

    return client;
}

