import mongoose from 'mongoose';

let client;

export async function connectToDatabase() {
    if (!client || !mongoose.conection) {
        await mongoose.connect('mongodb+srv://Jdibbert:11Jamie11@projectquizz.vizvj.mongodb.net/schwizz?retryWrites=true&w=majority').then(() => {
            client = mongoose.connection;
        });
    }

    return client;
}