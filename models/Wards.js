const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Wards = new Schema(
  {
    name: { type: String },
    imgWardMain: { type: String },
    imgWardSub: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("wards", Wards);
