const mongoose = require("mongoose");

const DB =
  "mongodb+srv://karthikayyappa:karthikayyappa@cluster0.q1nsn.mongodb.net/?retryWrites=true&w=majority";


  mongoose
      .connect(DB, {
          useNewUrlParser: true,
          useUnifiedTopology:true
  }).then(()=> console.log("DB Connected Succesfully....")).catch((err)=> console.log(err.message))