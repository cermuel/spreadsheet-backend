const SpreadsheetModels = require(".././models/Spreadsheet.models");
const asyncWrapper = require(".././middleware/asyncWrapper");

const GetAllSpreadSheets = asyncWrapper(async (req, res) => {
  const spreadsheets = await SpreadsheetModels.find({});
  res.status(200).json({
    success: true,
    data: spreadsheets,
  });
});

const GetSingleSpreadSheet = asyncWrapper(async (req, res) => {
  let id = req.params.id;
  const spreadsheet = await SpreadsheetModels.findOne({
    _id: id,
  });
  if (spreadsheet) {
    res.status(200).json({ success: true, data: spreadsheet });
  } else {
    res.status(404).json({ success: false, message: "Spreadsheet not found" });
  }
});

const CreateSpreadSheet = asyncWrapper(async (req, res) => {
  const value = req.body;
  if (value.name && value.data) {
    if (value.data.length < 1) {
      value.data.push({ columnName: "Type to rename", values: [] });
      const spreadsheet = await SpreadsheetModels.create(value);
      res.status(201).json({
        success: true,
        data: spreadsheet,
        message: `Spreadsheet created successfully`,
      });
    } else {
      const spreadsheet = await SpreadsheetModels.create(value);
      res.status(201).json({
        success: true,
        data: spreadsheet,
        message: `Spreadsheet created successfully`,
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: `Invalid data`,
    });
  }
});
const UpdateSpreadSheet = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const newValues = req.body;
  const newSpreadsheet = await SpreadsheetModels.findOneAndUpdate(
    {
      _id: id,
    },
    newValues,
    {
      new: true,
    }
  );
  if (newSpreadsheet) {
    res.status(200).json({
      success: true,
      newSpreadsheet,
      message: `Spreadsheet updated successfully`,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `Spreadsheet with id of ${id} not found`,
    });
  }
});
const deleteSpreadsheet = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const newValues = req.body;
  const newSpreadsheet = await SpreadsheetModels.findOneAndDelete(
    {
      _id: id,
    },
    newValues,
    {
      new: true,
    }
  );
  if (newSpreadsheet) {
    res.status(200).json({
      success: true,
      message: `Spreadsheet deleted successfully 😔`,
    });
  } else {
    res.status(404).json({
      success: false,
      message: `Spreadsheet with id of ${id} not found`,
    });
  }
});
module.exports = {
  GetAllSpreadSheets,
  GetSingleSpreadSheet,
  UpdateSpreadSheet,
  CreateSpreadSheet,
  deleteSpreadsheet,
};
