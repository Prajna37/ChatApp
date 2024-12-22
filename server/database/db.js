import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.db_username;
const PASSWORD = process.env.db_password;

const Connection = async () => {
    // Use template literals to insert the values from the environment variables
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.d2qhi.mongodb.net/`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with database:", error.message);
    }
};

export default Connection;
