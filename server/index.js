require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = Number(process.env.PORT || 9800);

const dbConnect = require("./db/config");
dbConnect();

const indexRoute = require("./routes");

// Add these lines to enable body parsing middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use("/", indexRoute);

app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "Something went wrong";
  res.status(500).json({ data: null, msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`Application Running ${PORT}`);
});
