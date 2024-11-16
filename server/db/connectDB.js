import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
  try {
    console.log("Connection Strings:", DB_URL);

    const option = {
      dbName: "ecommerce",
    };

    await mongoose.connect(DB_URL, option);
    console.log("DataBase connection successfull............");
  } catch (error) {
    console.log("ERROR in Connection DATABASE");
  }
};

export default connectDB;
