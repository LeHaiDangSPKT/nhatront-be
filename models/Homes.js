const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Homes = new Schema(
  {
    name: { type: String },
    address: { type: String },
    map: { type: String },
    distance: { type: Number },
    price: { type: Number },
    power: { type: Number },
    water: { type: Number },
    motorcycle: { type: Number },
    wifi: { type: Number },
    airConditioner: { type: Number },
    waste: { type: Number },
    describe: { type: String },
    hostName: { type: String },
    hostPhoneNumber: { type: String },
    imgHome: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("homes", Homes);
