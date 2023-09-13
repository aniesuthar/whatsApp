import mongoose from 'mongoose';
import dotenv from 'dotenv';


const Connection = async () => {

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

    const URL= `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qmiqfpi.mongodb.net/?retryWrites=true&w=majority`;


    try{
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log("DB Connected");
    }
    catch (error){
        console.log("Error while connecting with database", error.message);
    }
}

export default Connection;