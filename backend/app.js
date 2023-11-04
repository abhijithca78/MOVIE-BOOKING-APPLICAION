import express from "express";
import userRouter from "./routes/user-routes";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotnev");
const app = express();
app.use("/user",userRouter)

//middlewares


mongoose
  .connect(
    `mongodb+srv://caabhijith78:${process.env.MONGODB_PASSWORD}@cluster0.zlfa3zn.mongodb.net/`
  )
  .then(() => app.listen(3500, () => console.log("connected successfully")))
  .catch((e) => console.log(e));

// app.listen(3500, () => {
//   console.log(`Example app listening on port ${3500}`);
// });

// "mongodb+srv://caabhijith78:aBPdOaIRzcOsahMy@cluster0.zlfa3zn.mongodb.net/"
