import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
} from "@mui/material";
// import EditIcon from '@mui/icons-material/Edit';
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import { Link, NavLink } from "react-router-dom";
import Title from "../../Component/Title";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const AddRecruiter = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const [inpval, setINP] = useState({
    recruiterId: "",
    recemail: "",
    recruiterName: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { recruiterId, recemail, recruiterName } = inpval;

    const res = await fetch(`http://localhost:8003/recruiterdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recruiterId,
        recemail,
        recruiterName,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("Error");
      console.log("error");
    } else {
      alert("new recruiter added ");
      console.log("New Recruiter added");
    }
  };

  const getdata = async (e) => {
    // e.preventDefault();

    const res = await fetch(`http://localhost:8003/recruiterlist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleterec = async (id) => {

    const res1 = await fetch(`http://localhost:8003/deleterec/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res1.json();
    console.log(deletedata);

    if (res1.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("User Deleted...");
      getdata();
    }

  };

  return (
    <>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div>
          <Title>Add Candidate Form</Title>
          <Box
            component="form"
            onSubmit={addinpdata}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                id="outlined-select-currency"
                name="recruiterId"
                label="Recruiter Id"
                type="recruiterId"
                value={inpval.recruiterId}
                onChange={changeHandler}
              />
              <TextField
                fullWidth
                id="outlined-select-currency"
                name="recemail"
                label="Email"
                type="recemail"
                value={inpval.recemail}
                onChange={changeHandler}
              />
              <TextField
                fullWidth
                // id="fullWidth"
                id="outlined-select-currency"
                // required
                name="recruiterName"
                label="Recruiter Name"
                type="recruiterName"
                value={inpval.recruiterName}
                onChange={changeHandler}
              />
            </div>
            <div>
              <Button type="submit" 
              onClick={addinpdata}
              >
                Add
              </Button>
            </div>
          </Box>
        </div>
      </Paper>
      <Toolbar />

      <Paper>
        <React.Fragment>
          <Title>Active Recruiter List</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Recruiter.Id</TableCell>
                <TableCell>Recruiter.Email</TableCell>
                <TableCell>Recruiter Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getuserdata.map((recruites) => (
                <TableRow key={recruites.id}>
                  <TableCell>{recruites.recruiterId}</TableCell>
                  <TableCell>{recruites.recemail}</TableCell>
                  <TableCell>{recruites.recruiterName}</TableCell>
                  <TableCell>
                    <div align="right">

                      {/*
                        <NavLink to={`/userdashboard/details/${recruite._id}`}>
                          <Button size="sm" varient="danger">
                            <RemoveRedEyeIcon />
                          </Button>
                        </NavLink> 
                        <Link to={`/userdashboard/editpage/${recruite._id}`}>
                          <Button size="sm" varient="danger">
                            <EditIcon />
                          </Button>
                        </Link> 
                      */}

                      <Link
                        size="sm"
                        onClick={() => deleterec(recruites._id)}
                        varient="danger"
                      >
                        <DeleteIcon />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      </Paper>
    </>
  );
};

export default AddRecruiter;
