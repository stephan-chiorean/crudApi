import {MongoClient} from 'mongodb';

const {
    MONGO_URI='mongodb+srv://stephan:stephan@cluster0.iiaohj3.mongodb.net/?retryWrites=true&w=majority',
} = process.env;

export const client = new MongoClient(MONGO_URI)
export const db = client.db();


