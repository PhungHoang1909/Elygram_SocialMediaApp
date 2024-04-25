import mongoose from "mongoose"

let isConnected = false // Check connection status

export const connectToDB = async () => {
    mongoose.set('strickQuery', true);

    if (isConnected) {
        console.log("MongoDB is connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Elygram",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log("MongoDB is connected");
        
    } catch (error) {
        console.log(error);
    }
}