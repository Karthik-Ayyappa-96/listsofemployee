const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true,
  },
  vendorEmail: {
    type: String,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
});

const vendor = new mongoose.model("vendor", vendorSchema);

module.exports = vendor;
