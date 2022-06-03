const express = require("express");
const mongoose = require("mongoose");
const devUser = require("./modals/devusermodal");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const reviewmodal = require("./reviewmodal");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose
  .connect(
    "mongodb+srv://karthikayyappa:karthikayyappa@cluster0.q1nsn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  return res.send("Hello Karthik...!!!");
});

app.post("/register", async (req, res) => {
  try {
    const { fullname, email, mobile, skill, password, confirmpassword } =
      req.body;
    const exist = await devUser.findOne({ email });
    if (exist) {
      return res.status(400).send("User Already registered");
    }
    if (password != confirmpassword) {
      return res.status(403).send("Password Invalid");
    }
    let newUser = new devUser({
      fullname,
      email,
      mobile,
      skill,
      password,
      confirmpassword,
    });
    newUser.save();
    return res.status(200).send("User Registered Successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await devUser.findOne({ email });
    if (!exist) {
      return res.status(400).send("User not exists");
    }
    if (exist.password != password) {
      return res.status(400).send("password Invalid");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtPassword", { expiresIn: 36000000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

app.get("/allprofiles", middleware, async (req, res) => {
  try {
    let allprofile = await devUser.find();
    return res.json(allprofile);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error....");
  }
});

app.get("/myprofile", middleware, async (req, res) => {
  try {
    let user = await devUser.findById(req.user.id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error....");
  }
});

app.post("/addreview", middleware, async (req, res) => {
  try {
    const { taskworker, rating } = req.body;
    const exist = await devUser.findById(req.user.id);
    const newReview = new reviewmodal({
      taskprovider: exist.fullname,
      taskworker,
      rating,
    });
    newReview.save();
    return res.status(200).send("Review added successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error....");
  }
});

app.get("/myreview", middleware, async (req, res) => {
  try {
    let allreview = await reviewmodal.find();
    let myreview = allreview.filter(
      (review) => review.taskworker.toString() === req.user.id.toString()
    );
    return res.status(200).json(myreview);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error....");
  }
});

app.listen(8081, () => console.log("Server running successfully.."));
