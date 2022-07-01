import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import {FormControl, FormHelperText} from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import "./login.css";
import axios from "axios";

export default function Login() {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    // showPassword: true,
  });

  // const changeHandler = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const changeHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8003/login", data).then(
      (res) =>
        // console.log(res)
        res.data,
      // localStorage.setItem("token", res.data.token);
      setAuth(true)
      // console.log(res.data)
    );
  };
  // if (localStorage.getItem("token")) {
  //   return <Navigate to="/userdashboard/*" />;
  // }

  // or

  if (auth) {
    return <Redirect to="/userdashboard/home" />;
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Box
            // component="form"
            sx={{
              // "& .MuiTextField-root":
                m: "40%", width: "25ch", border: "0.5px solid black" ,
            }}
            // onSubmit={submitHandler}
            noValidate
            autoComplete="off"
          >
          <div>
              <Avatar sx={{ m: 1, bgcolor: "#0063cc" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h6" noWrap component="div">
                Sign In
              </Typography>
            </div>
          <form className="form" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
              <input
                style={{ padding: "10px", margin: "2px" }}
                type="email"
                placeholder="Email Adress"
                name="email"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group">
              <input
                style={{ padding: "10px" }}
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
              />
            </div>
            <link to="/forgotpassword" text="Forgot Password?" />
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          </Box>
        </div>
      </div>
    </div>
  );
}
