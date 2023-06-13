const express = require("express");
require("dotenv").config();
const connect = require("./db/connect");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4002;
const spreadsheets = require("./routes/spreadsheet.routes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/spreadsheet", spreadsheets);
app.use(errorHandler);

const start = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err.message ? err.message : `An error occured`);
  }
};
start();
