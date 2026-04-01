import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB DB connection established");
        } );
        mongoose.connection.on("error", (err) => {
            console.error("MongoDB DB connection error:", err);
        }); 

        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
