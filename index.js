const express = require("express");
const app = express();
const connectDb = require("./utils/connections");
const userRouter = require("./routes/user");
connectDb();
app.use(express.json());
app.use("/users", userRouter);
app.listen(3000, () => {
  console.log("PORT WORKING ON 3000");
});
