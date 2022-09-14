const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Homes = new Schema(
  {
    name: { type: String, require: true },
    address: { type: String, required: true },
    map: { type: String, required: true },
    distance: { type: Number, required: true },
    price: { type: Number, required: true },
    power: { type: Number, required: true },
    water: { type: Number, required: true },
    motorcycle: { type: Number, required: true },
    wifi: { type: Number, required: true },
    airConditioner: { type: Number, required: true },
    waste: { type: Number },
    describe: { type: String, required: true },
    hostName: { type: String, required: true },
    hostPhoneNumber: { type: String, required: true },
    imgHome: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("homes", Homes);
