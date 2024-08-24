import mongoose from "mongoose";
export const connectDB = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/sara7a-mvc").then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log("failed to connect", err);
    })
}