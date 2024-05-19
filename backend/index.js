import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
// import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";

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
// const __dirname = path.resolve();
const app = express();
app.use(
  cors({
    origin: "https://mern-blog-app-py3d.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
// app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.get("/", function (req, res) {
  res.send("Server is running...");
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
