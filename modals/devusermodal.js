const mongoose = require("mongoose");
// const multer = require('multer');
// const path = require('path');

const userSchema = new mongoose.Schema({
  recruiterId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  totalExperience: {
    type: String,
    required: true,
  },
  relaventExperience: {
    type: String,
    required: true,
  },
  currentSalary: {
    type: Number,
    required: true,
  },
  expectedSalary: {
    type: Number,
    required: true,
  },
  noticePeriod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  interviewDate: {
    type: String,
    required: true,
  },
  onboardDate: {
    type: String,
    required: true,
  },
  anyOffer: {
    type: String,
    required: true,
  },
  offeredCompany: {
    type: String,
    required: true,
  },
  panId: {
    type: String,
    required: true,
  },
  uanId: {
    type: String,
    required: true,
  },
  jobRequired: {
    type: String,
    required: true,
  },
  jobDiscription: {
    type: String,
    required: true,
  },
  expectedJoinDate: {
    type: String,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
  recruitComments: {
    type: String,
    required: true,
  },
  file:{
    type: String,
    // required: true,
},
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
