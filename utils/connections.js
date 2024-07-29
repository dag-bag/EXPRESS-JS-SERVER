const mongoose = require("mongoose");
const User = require(".././models/user");
const URI = "mongodb+srv://yogapth:admin@cluster0.dzkc4nt.mongodb.net/study";
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MONGODB CONNECTED");
  } catch {
    console.log("ERROR TO CONNECT DATABASE");
  }
};
module.exports = connectDb;
