const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
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
        // unique: true,
      },
      phoneNo: {
        type: String,
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
        type: String,
        required: true,
      },
      expectedSalary: {
        type: String,
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
})

const candidateUser = new mongoose.model("candidateUser",candidateSchema)

module.exports = candidateUser