import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const DbPassword = process.env.USER_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://ashraf:${DbPassword}@mern-blog-app.kxs0srn.mongodb.net/mern-blog-app?retryWrites=true&w=majority&appName=mern-blog-app`
  )
  .then(() => {
    console.log("DataBase is connected--->");
  })
  .catch((err) => {
    console.log("err------>", err);
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
