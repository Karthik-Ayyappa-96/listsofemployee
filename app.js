require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("./db/conn");
const users = require("./modals/devusermodal");
const router = require("./routes/router");
// const devUsers = require("./modals/user");
// const upload = require("./helpers/filehelpers");
const path = require("path");
const uploads = require("./modals/upload");

const port = 8003;

app.use(cors());
app.use(express.urlencoded({ extended: true} ));

app.use(router);
// app.use(uploads.fields([{name: 'file', maxcount: 1}]));

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const exist = await devUser.findOne({ email });
//     if (!exist) {
//       return res.status(400).send("User not exists").alert("User not exists");
//     }
//     if (exist.password != password) {
//       return res.status(400).send("password Invalid").alert("password Invalid");
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error......");
//   }
// });

app.get("/candidatelist", async (req, res) => {
  try {
    let allcandidates = await users.find();
    return res.json(allcandidates);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error......");
  }
});

// app.get("/getuser/:id", async (req, res) => {
//     try {
//       console.log(req.params);
//       let { id } = req.params;

//       const userindividual = await users.findById({ _id: id });
//       console.log(userindividual);
//       return res.status(201).json(userindividual);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).send("Server Error......");
//     }
// })

app.listen(port, () => console.log("Server running successfully at 8003.."));
