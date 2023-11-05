const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user-routes");
const adminRouter = require("./routes/admin-routes");
const movieRouter = require("./routes/movie-routes");
const bookingRouter = require("./routes/booking-routes");
dotenv.config();

const PORT = process.env.PORT || 3500;

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

mongoose.connect(`${process.env.MONGO_URI}`);

app.listen(PORT, () => {
  console.log(`Database connected.`);
});

// import express, { json } from "express";
// const app = express();
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";

// import { connect } from "mongoose";
// import { config } from "dotnev";
// import userRouter from './routes/user-routes';
// import adminRouter from './routes/admin-routes';
// import movieRouter from './routes/movie-routes';
// import bookingRouter from './routes/booking-routes';
// config();

// //middlewares
// app.use(json());
// app.use("/user",userRouter);

// connect(
//     `mongodb+srv://caabhijith78:${process.env.MONGODB_PASSWORD}@cluster0.zlfa3zn.mongodb.net/`
//   )
//   .then(() => app.listen(3500, () => console.log("connected successfully")))
//   .catch((e) => console.log(e));

// // app.listen(3500, () => {
// //   console.log(`Example app listening on port ${3500}`);
// // });

// // "mongodb+srv://caabhijith78:aBPdOaIRzcOsahMy@cluster0.zlfa3zn.mongodb.net/"
