import mongoose from "mongoose";

mongoose.set("strictQuery", false); // if extra information add to the qurey it doen't give any error..

const connectionToDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    if (connection) {
      console.log(`Connected to MongoDb: ${connection.host}`);
    }
  } catch (e) {
    console.log(e);
    process.exit(1); // Database fully terminated..
  }
};

export default connectionToDb;
