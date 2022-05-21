const mongoose = require('mongoose');

let client;

export async function connectToDatabase() {
    if (!client || !mongoose.connection) {
        await mongoose
            .connect('mongodb+srv://Jdibbert:11Jamie11@projectquizz.vizvj.mongodb.net/schwizz')
            .then(() => {
                client = mongoose.connection;
            });

        client.on('close', () => {
            client = null;
        });
    }

    return client;
}
