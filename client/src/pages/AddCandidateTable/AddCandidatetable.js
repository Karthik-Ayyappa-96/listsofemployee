import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Title from "../../Component/Title";
import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, NavLink } from "react-router-dom";
// import { Button } from "@mui/material";
// import axios from "axios";

const AddCandidateTable = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  //   const [data, setData] = useState([]);
  //   console.log(data);
  //  useEffect(() => {
  //    axios
  //      .get(
  //        "http://localhost:8003/candidatelist"
  //      )
  //      .then((res) => setData(res.data));
  //  }, []);

  const getdata = async (e) => {
    // e.preventDefault();

    const res = await fetch("http://localhost:8003/candidatelist", {
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

  const deleteuser = async (id) => {
    const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("User Deleted...");
      getdata();
    }
  };

  return (
    <>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <React.Fragment>
          <Title>Active Candidates List</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Rec.Id</TableCell>
                <TableCell>Cand.Name</TableCell>
                <TableCell>Ph.no</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Job Requirment</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getuserdata.map((users, index) => (
                <TableRow key={index}>
                  <TableCell>{users.recruiterId}</TableCell>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.phoneNo}</TableCell>
                  <TableCell>{users.status}</TableCell>
                  <TableCell>{users.jobRequired}</TableCell>
                  <TableCell>
                    <div align="right">
                      <NavLink to={`/userdashboard/details/${users._id}`}>
                        <Button size="sm" varient="danger">
                          <RemoveRedEyeIcon />
                        </Button>
                      </NavLink>
                      <Link to={`/userdashboard/editpage/${users._id}`}>
                        <Button size="sm" varient="danger">
                          <EditIcon />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => deleteuser(users._id)}
                        varient="danger"
                      >
                        <DeleteIcon />
                      </Button>
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

export default AddCandidateTable;
