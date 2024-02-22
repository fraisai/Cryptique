import mongoose, { Error } from 'mongoose';
require('dotenv').config();
const mongo_url: string = '' + process.env.MONGODB_ATLAS_URI;
// use mongoose to connect app to mongodb atlas db

export default async function mongoDbConnect() {
    mongoose.connect(mongo_url)
    .then(() => {
        console.log('Connected to MongoDB Atlas')
    })
    .catch((error: Error) => {
        console.log('mongoConnect.ts error', error)
    })
};


