const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Activity = new Schema(
  {
    name: { type: String },
    title: { type: String },
    link: { type: String },
    state: { type: String },
    imgActivity: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("activities", Activity);
