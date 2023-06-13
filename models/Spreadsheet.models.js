const mongoose = require("mongoose");

const spreadsheetSchema = new mongoose.Schema({
  name: String,
  data: Array,
});

module.exports = mongoose.model("Spreadsheet", spreadsheetSchema);
