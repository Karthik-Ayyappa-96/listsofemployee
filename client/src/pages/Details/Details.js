import { Button, Card, CardContent, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./details.css";
// import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const history = useHistory("");

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    // e.preventDefault();

    const res = await fetch(`http://localhost:8003/getuser/${id}`, {
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
      history.push("/userdashboard/home");
      getdata();
    }
  };

  return (
    <div>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontWeight: 400 }}> Welcome candidate</h1>

        <Card>
          <CardContent>
            <div className="add_btn">
              <Link to={`/userdashboard/editpage/${getuserdata._id}`}>
                <Button size="sm" varient="danger">
                  <EditIcon />
                </Button>
              </Link>
              <Button
                size="sm"
                onClick={() => deleteuser(getuserdata._id)}
                varient="danger"
              >
                <DeleteIcon />
              </Button>
            </div>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                <h3 className="mt-3">
                  Recruiter Id:
                  <span>{getuserdata.recruiterId}</span>
                </h3>
                <h3 className="mt-3">
                  Name:
                  <span>{getuserdata.name}</span>
                </h3>
                <h3 className="mt-3">
                  Email:
                  <span>{getuserdata.email}</span>
                </h3>
                <h3 className="mt-3">
                  Total Experience:
                  <span>{getuserdata.totalExperience}</span>
                </h3>
                <h3 className="mt-3">
                  Relavent Experience:
                  <span>{getuserdata.relaventExperience}</span>
                </h3>
                <h3 className="mt-3">
                  Current Salary:
                  <span>{getuserdata.currentSalary}</span>
                </h3>
                <h3 className="mt-3">
                  Expected Salary:
                  <span>{getuserdata.expectedSalary}</span>
                </h3>
                <h3 className="mt-3">
                  Notice Period:
                  <span>{getuserdata.noticePeriod}</span>
                </h3>
                <h3 className="mt-3">
                  Status:
                  <span>{getuserdata.status}</span>
                </h3>
                <h3 className="mt-3">
                  Interview Date:
                  <span>{getuserdata.interviewDate}</span>
                </h3>
              </div>
              <div className="right_view col-lg-6 col-md-6 col-12">
                <h3 className="mt-3">
                  Onboard Date:
                  <span>{getuserdata.onboardDate}</span>
                </h3>
                <h3 className="mt-3">
                  Any Offer:
                  <span>{getuserdata.anyOffer}</span>
                </h3>
                <h3 className="mt-3">
                  Offered Company:
                  <span>{getuserdata.offeredCompany}</span>
                </h3>
                <h3 className="mt-3">
                  Pan Id:
                  <span>{getuserdata.panId}</span>
                </h3>
                <h3 className="mt-3">
                  Uan Id:
                  <span>{getuserdata.uanId}</span>
                </h3>
                <h3 className="mt-3">
                  Job Required:
                  <span>{getuserdata.jobRequired}</span>
                </h3>
                <h3 className="mt-3">
                  Job Discription:
                  <span>{getuserdata.jobDiscription}</span>
                </h3>
                <h3 className="mt-3">
                  Expected Joining Date:
                  <span>{getuserdata.expectedJoinDate}</span>
                </h3>
                <h3 className="mt-3">
                  Vendor Name:
                  <span>{getuserdata.vendorName}</span>
                </h3>
                <h3 className="mt-3">
                  Phone No:
                  <span>{getuserdata.phoneNo}</span>
                </h3>
                <h3 className="mt-3">
                  Recruiter Comments:
                  <span>{getuserdata.recruitComments}</span>
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default Details;
