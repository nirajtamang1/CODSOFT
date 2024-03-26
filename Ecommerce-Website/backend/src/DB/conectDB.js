import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDd_URL);
    console.log("Connected to MongoDB DataBase");
  } catch (error) {
    console.log(`${error}`);
  }
};
