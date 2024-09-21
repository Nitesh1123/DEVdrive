import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://sarkarsamrat16112004:samrat8145246849@cluster0.qxmpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
