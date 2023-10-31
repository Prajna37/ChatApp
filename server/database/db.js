import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    // mongodb+srv://${USERNAME}:${PASSSWORD}@clone-whatsapp.4qylnoh.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${USERNAME}:${PASSSWORD}@cluster0.n72e496.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with databse', error.message);
    }
}

export default Connection;