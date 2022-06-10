const express = require("express");
const router = express.Router();
const users = require("../modals/devusermodal");
const devUsers = require("../modals/user");
const multer = require("multer");
const recruite = require("../modals/recruiter");
const vendor = require("../modals/vendor");

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

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
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
    resume,
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
    !recruitComments ||
    !resume
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
        resume,
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


//add recruiter data

router.post("/recruiterdata", async (req, res) => {
  const { recruiterId, recemail, recruiterName } = req.body;

  if (!recruiterId || !recemail || !recruiterName) {
    res.status(404).json("Please fill the data");
  }
  try {
    const preuser = await recruite.findOne({ recemail: recemail });
    console.log(preuser);
    if (preuser) {
      res.status(404).json("this email aready exists...");
    } else {
      const addrec = new recruite({
        recruiterId,
        recemail,
        recruiterName,
      });
      await addrec.save();
      res.status(201).json(addrec);
      console.log(addrec);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error.....");
  }
});

//get recruiter data

router.get("/recruiterlist", async (req, res) => {
  try {
    const recdata = await recruite.find();
    res.status(201).json(recdata);
    console.log(recdata);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error....");
  }
});

//add vendor data

router.post("/vendordata", async (req, res) => {
  const { vendorId, vendorEmail, vendorName } = req.body;

  if (!vendorId || !vendorEmail || !vendorName) {
    res.status(404).json("Please fill the data");
  }
  try {
    const preuser = await vendor.findOne({ vendorEmail: vendorEmail });
    console.log(preuser);
    if (preuser) {
      res.status(404).json("this email aready exists...");
    } else {
      const addvendor = new vendor({
        vendorId,
        vendorEmail,
        vendorName,
      });
      await addvendor.save();
      res.status(201).json(addvendor);
      console.log(addvendor);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error.....");
  }
});

//get vendor data

router.get("/vendorlist", async (req, res) => {
  try {
    const vendordata = await vendor.find();
    res.status(201).json(vendordata);
    console.log(vendordata);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error....");
  }
});

//get data based on id

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

//delete recruiter

router.delete("/deleterec/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await recruite.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

//delete vendor

router.delete("/deletevendor/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await vendor.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

//image upload

module.exports = router;
