const express = require("express");
const Router = express.Router();

const {
  GetAllSpreadSheets,
  GetSingleSpreadSheet,
  UpdateSpreadSheet,
  CreateSpreadSheet,
  deleteSpreadsheet,
} = require(".././controllers/spreadsheet.controller");

Router.get("/", GetAllSpreadSheets);
Router.post("/", CreateSpreadSheet);
Router.patch("/:id", UpdateSpreadSheet);
Router.get("/:id", GetSingleSpreadSheet);
Router.delete("/:id", deleteSpreadsheet);

module.exports = Router;
