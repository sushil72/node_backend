import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const mongodbUri = process.env.MONGODB_URL;
        await mongoose.connect(mongodbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log("MongoDB Connection error: ", err);
        process.exit(1);
    }
}
export default connectDB;