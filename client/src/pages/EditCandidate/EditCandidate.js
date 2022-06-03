import React, { useState, useEffect } from "react";
import Title from "../../Component/Title";
import { Box, Button, TextField, Paper } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

const AnyOffer = [
  {
    value: "-",
    label: "None",
  },
  {
    value: "YES",
    label: "yes",
  },
  {
    value: "NO",
    label: "No",
  },
];

const job = [
  {
    value: "-",
    label: "None",
  },
  {
    value: "FRONTEND",
    label: "Front-end",
  },
  {
    value: "BACKEND",
    label: "Back-end",
  },
  {
    value: "MERN",
    label: "Mern",
  },
  {
    value: "FULLSTACK",
    label: "Full-Stack",
  },
];

const EditCandidate = () => {
  //  const [getuserdata, setUserdata] = useState([]);
  //  console.log(getuserdata);

  const history = useHistory("");

  const { id } = useParams("");
  console.log(id);

  const [inpval, setINP] = useState({
    recruiterId: "",
    name: "",
    email: "",
    totalExperience: "",
    relaventExperience: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
    status: "",
    interviewDate: "",
    onboardDate: "",
    anyOffer: "",
    offeredCompany: "",
    panId: "",
    uanId: "",
    jobRequired: "",
    jobDiscription: "",
    expectedJoinDate: "",
    vendorName: "",
    phoneNo: "",
    recruitComments: "",
  });

  const changeHandler = (e) => {
    // setData({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

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
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

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
      recruitComments
    } = inpval;

    const res2 = await fetch(`http://localhost:8003/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data ")
    } else {
      alert("data added")
      history.push("/userdashboard/home");
    }
  };

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <div>
        <Title>Edit Candidate Form</Title>
        <Box
          component="form"
          onSubmit={changeHandler}
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
              disabled
              name="recruiterId"
              label="Recruiter Id"
              type="recruiterID"
              value={inpval.recruiterId}
              onChange={changeHandler}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="name"
              label="Name"
              type="name"
              value={inpval.name}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="email"
              label="Email"
              type="email"
              value={inpval.email}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="phoneNo"
              label="Ph.No"
              type="phoneNo"
              value={inpval.phoneNo}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              required
              name="status"
              label="Status"
              type="status"
              value={inpval.status}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              required
              name="interviewDate"
              label="Interview Date"
              type="interviewDate"
              value={inpval.interviewDate}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              required
              name="onboardDate"
              label="Onboard Date"
              type="onboardDate"
              value={inpval.onboardDate}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="totalExperience"
              label="Total Experience"
              type="totalExperience"
              value={inpval.totalExperience}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="relaventExperience"
              label="Relavent Experience"
              type="relaventExperience"
              value={inpval.relaventExperience}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="currentSalary"
              label="Current Salary"
              type="currentSalary"
              value={inpval.currentSalary}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="expectedSalary"
              label="Expected Salary"
              type="expectedSalary"
              value={inpval.expectedSalary}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="noticePeriod"
              label="Notice Period"
              type="noticePeriod"
              value={inpval.noticePeriod}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              label="Any Offer"
              name="anyOffer"
              value={inpval.anyOffer}
              defaultValue={AnyOffer.label}
              onChange={changeHandler}
              SelectProps={{
                native: true,
              }}
            >
              {AnyOffer.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              disabled
              name="offeredCompany"
              label="Offered Company"
              type="offeredCompany"
              value={inpval.offeredCompany}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="panId"
              label="Pan Id"
              type="panId"
              value={inpval.panId}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="uanId"
              label="Uan Id"
              type="uanId"
              value={inpval.uanId}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              select
              disabled
              type="jobRequired"
              label="Job Required"
              name="jobRequired"
              value={inpval.jobRequired}
              defaultValue={AnyOffer.label}
              onChange={changeHandler}
              SelectProps={{
                native: true,
              }}
            >
              {job.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              multiline
              id="outlined-select-currency"
              disabled
              name="jobDiscription"
              label="Job Discription"
              type="jobDiscription"
              value={inpval.jobDiscription}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="expectedJoinDate"
              label="Expected Join Date"
              type="expectedJoinDate"
              value={inpval.expectedJoinDate}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="vendorName"
              label="Vendor Name"
              type="vendorName"
              value={inpval.vendorName}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              multiline
              disabled
              name="recruitComments"
              label="Recruit Comments"
              type="recruitComments"
              value={inpval.recruitComments}
              onChange={changeHandler}
            />
          </div>
          <div>
            <Button type="submit" onClick={updateuser}>
              Save
            </Button>
          </div>
        </Box>
      </div>
    </Paper>
  );
};

export default EditCandidate;
