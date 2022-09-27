const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const YearOfActivity = new Schema(
  {
    year: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("yearOfActivities", YearOfActivity);
