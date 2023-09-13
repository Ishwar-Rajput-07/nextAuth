import mongoose from "mongoose";


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL as string)
    console.log("MONGO Connected");
}
export default connectDB