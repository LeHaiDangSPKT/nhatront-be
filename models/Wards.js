const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Wards = new Schema(
  {
    name: { type: String, required: true },
    imgWardMain: { type: String, required: true },
    imgWardSub: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("wards", Wards);
