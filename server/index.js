require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = Number(process.env.PORT || 9800);


mongoose.connect("mongodb://localhost:27017/").then(()=>{
  console.log("Database connect successfully ")
}).catch((e)=>{
  console.log("Database Error")
})

app.listen(PORT, () => {
  console.log(`Application Running ${PORT}`);
});
