const express = require("express");
const router = express.Router();
const users = require("../modals/devusermodal");
const devUsers = require("../modals/user");
const upload = require("../helpers/filehelpers");
const singleFileUpload = require("../controller/fileuploadcontroller");

// router.post("/register", (req, res) => {
//   console.log(req.body);
// });

router.post("./login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await devUsers.findOne({ email });
    if (!exist) {
      return res.status(400).json("User not exists");
    }
    if (exist.password != password) {
      return res.status(400).json("password Invalid");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

router.post("/candidate", async (req, res) => {
  const {
    recruiterId,
    name,
    email,
    totalExperience,
    relaventExperience,
    currentSalary,
    expectedSalary,
    noticePeriod,
    status,
    interviewDate,
    onboardDate,
    anyOffer,
    offeredCompany,
    panId,
    uanId,
    jobRequired,
    jobDiscription,
    expectedJoinDate,
    vendorName,
    phoneNo,
    recruitComments,
  } = req.body;

  if (
    !recruiterId ||
    !name ||
    !email ||
    !totalExperience ||
    !relaventExperience ||
    !currentSalary ||
    !expectedSalary ||
    !noticePeriod ||
    !status ||
    !interviewDate ||
    !onboardDate ||
    !anyOffer ||
    !offeredCompany ||
    !panId ||
    !uanId ||
    !jobRequired ||
    !jobDiscription ||
    !expectedJoinDate ||
    !vendorName ||
    !phoneNo ||
    !recruitComments
  ) {
    res.status(404).json("Please fill the data");
  }
  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(404).json("this email aready exists...");
    } else {
      const adduser = new users({
        recruiterId,
        name,
        email,
        totalExperience,
        relaventExperience,
        currentSalary,
        expectedSalary,
        noticePeriod,
        status,
        interviewDate,
        onboardDate,
        anyOffer,
        offeredCompany,
        panId,
        uanId,
        jobRequired,
        jobDiscription,
        expectedJoinDate,
        vendorName,
        phoneNo,
        recruitComments,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error....");
  }
});

//get user data

router.get("/candidatelist", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error....");
  }
});

// router.get("/candidatelist", async (req, res) => {
//   try {
//     let allcandidates = await users.find();
//     return res.json(allcandidates);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error......");
//   }
// });

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    let { id } = req.params;

    const userindividual = await users.findById({ _id: id });
    console.log(userindividual);
    return res.status(201).json(userindividual);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

//update user data

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

//delete user

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await users.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

//image upload

// router.post("/singleupload", upload.single("file"), singleFileUpload);

module.exports = router;
