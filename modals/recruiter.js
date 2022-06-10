const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  recruiterId: {
    type: String,
    required: true,
  },
  recemail:{
    type: String,
    required: true,
  },
  recruiterName: {
    type: String,
    required: true,
  },
});

const recruite = new mongoose.model("recruite", recruiterSchema);

module.exports = recruite;
