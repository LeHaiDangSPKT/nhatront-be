const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Activity = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String },
    state: { type: String, required: true },
    imgActivity: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("activities", Activity);
