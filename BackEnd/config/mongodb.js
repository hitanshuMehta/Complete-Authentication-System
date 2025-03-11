import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("⏳ Connecting to MongoDB..."); // Debug log before connection attempt

        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);

        console.log("✅ Database Connected Successfully"); // Debug log after connection

        mongoose.connection.on("error", (err) => {
            console.error("❌ Database Connection Error:", err);
        });

    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
