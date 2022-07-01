import React, { useState, useEffect } from "react";
import Title from "../../Component/Title";
// import axios from "axios";
import { Box, TextField, Paper, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Input = styled("input")({
  display: "none",
});

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

const Status = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "New",
    label: "New",
  },
  {
    value: "Inprogress",
    label: "Inprogress",
  },
  {
    value: "Shortlisted",
    label: "Sortlisted",
  },
  {
    value: "Rejected",
    label: "Rejected",
  },
  {
    value: "Interview Inprogress",
    label: "Interview Inprogress",
  },
  {
    value: "Waiting for Feedback",
    label: "Waiting for Feedback",
  },
  {
    value: "Selected",
    label: "Selected",
  },
  {
    value: "Onboard",
    label: "Onboard",
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


const AddCandidate2 = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [getvendordata, setVendordata] = useState([]);
  // console.log(getuserdata);

  let formData = new FormData();

  const history = useHistory("");

  const [inpval, setINP] = useState({
    recruiterId: "",
    name: "",
    email: "",
    totalExperience: "",
    relaventExperience: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
    status: "Select",
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
    file: "",
  });

  // const [rdoc, setRdoc] = useState({ file: "" });

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

  // const fileChange = (e) => {
  //   // console.log(e.target.files[0]);
  //   const { name, files } = e.target;
  //   setINP(() => {
  //     return {
  //       [name]: files[0]
  //     }
  //   })
  // }

  const fileChange = (e) => {
    console.log(e.target.files[0]);
    // const { name, files } = e.target;
    // setINP(() => {
    //   return {
    //     [name]: files[0]
    //   }
    // })
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
    }
  };

  const addinpdata = async (e) => {
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
      recruitComments,
      file,
    } = inpval;

    
    // const { file } = rdoc;

    const res = await fetch("http://localhost:8003/candidate", {
      method: "POST",
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
        file,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("Error");
      console.log("error");
    } else {
      alert("new candidate added ");
      console.log("New Candidate added");
      history.push("/userdashboard/home");
    }
  };

  const getdata = async (e) => {
    // e.preventDefault();

    const res = await fetch("http://localhost:8003/recruiterlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      // console.log("get data");
    }
  };

  const getvdata = async (e) => {
    // e.preventDefault();

    const res = await fetch(" http://localhost:8003/vendorlist", {
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
      setVendordata(data);
      // console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    getvdata();
  }, []);

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <div>
        <Title>Add Candidate Form</Title>
        <Box
          // component="form"
          // enctype="multipart/form-data"
          onSubmit={addinpdata}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <form 
          // onSubmit={addinpdata}
          // action="/candidate"
          // encType="multipart/form-data"
          //   method="post"
           >
          <div className="form-group">
            <TextField
              id="outlined-select-currency"
              select
              label="Recruiter Id"
              name="recruiterId"
              value={inpval.recruiterId}
              // defaultValue={AnyOffer.label}
              onChange={changeHandler}
              SelectProps={{
                native: true,
              }}
            >
              {getuserdata.map((offer) => (
                <option key={offer.id} value={offer.value}>
                  {offer.recruiterId}
                </option>
              ))}
            </TextField>
            {/* </div> */}
            <TextField
              fullWidth
              id="fullWidth"
              // id="outlined-select-currency"
              // required
              name="name"
              label="Name"
              type="name"
              value={inpval.name}
              onChange={changeHandler}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              // required
              name="email"
              label="Email"
              type="email"
              value={inpval.email}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="phoneNo"
              label="Ph.No"
              type="phoneNo"
              value={inpval.phoneNo}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="totalExperience"
              label="Total Experience"
              type="totalExperience"
              value={inpval.totalExperience}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="relaventExperience"
              label="Relavent Experience"
              type="relaventExperience"
              value={inpval.relaventExperience}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="currentSalary"
              label="Current Salary"
              type="currentSalary"
              value={inpval.currentSalary}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="expectedSalary"
              label="Expected Salary"
              type="expectedSalary"
              value={inpval.expectedSalary}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="noticePeriod"
              label="Notice Period"
              type="noticePeriod"
              value={inpval.noticePeriod}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="status"
              label="Status"
              type="status"
              value={inpval.status}
              // defaultValue={Status.label}
              SelectProps={{
                native: true,
              }}
            >
              {Status.map((status) => (
                <option key={status.id} >
                  {status.label}
                </option>
              ))}
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
                disabled
                id="date"
                label="InterView Date"
                type="date"
                // defaultValue="no data"
                value={inpval.interviewDate}
                sx={{ width: 220 }}
                onChange={changeHandler}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                disabled
                id="date"
                label="Onboard date"
                type="date"
                // defaultValue="no data"
                value={inpval.onboardDate}
                sx={{ width: 220 }}
                onChange={changeHandler}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
            <TextField
              id="outlined-select-currency"
              select
              label="Any Offer"
              name="anyOffer"
              value={inpval.anyOffer}
              // defaultValue={AnyOffer.label}
              onChange={changeHandler}
              SelectProps={{
                native: true,
              }}
            >
              {AnyOffer.map((offer) => (
                <option key={offer.id} value={offer.value}>
                  {offer.label}
                </option>
              ))}
            </TextField>
            
            <TextField
              id="outlined-select-currency"
              // required
              name="offeredCompany"
              label="Offered Company"
              type="offeredCompany"
              value={inpval.offeredCompany}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="panId"
              label="Pan Id"
              type="panId"
              value={inpval.panId}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="uanId"
              label="Uan Id"
              type="uanId"
              value={inpval.uanId}
              onChange={changeHandler}
            />
            <TextField
              id="outlined-select-currency"
              select
              type="jobRequired"
              label="Job Required"
              name="jobRequired"
              value={inpval.jobRequired}
              onChange={changeHandler}
              SelectProps={{
                native: true,
              }}
            >
              {job.map((job) => (
                <option key={job.id} value={job.value}>
                  {job.label}
                </option>
              ))}
            </TextField>
            <TextField
              multiline
              id="outlined-select-currency"
              // required
              name="jobDiscription"
              label="Job Discription"
              type="jobDiscription"
              value={inpval.jobDiscription}
              onChange={changeHandler}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
                id="date"
                name="expectedJoinDate"
                label="Expected Join Date"
                type="Date"
                value={inpval.expectedJoinDate}
                sx={{ width: 220 }}
                onChange={changeHandler}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>

            <TextField
              id="outlined-select-currency"
              select
              name="vendorName"
              label="Vendor Name"
              type="vendorName"
              value={inpval.vendorName}
              onChange={changeHandler}
              // defaultValue="Vendor Name"
              SelectProps={{
                native: true,
              }}
            >
              {getvendordata.map((vendor) => (
                <option key={vendor.id} >
                  {vendor.vendorName}
                </option>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              multiline
              // required
              name="recruitComments"
              label="Recruit Comments"
              type="recruitComments"
              value={inpval.recruitComments}
              onChange={changeHandler}
            />
          </div>
          <div>
            {/* <Stack direcion="row" alignItems="center" spacing={4}>
              <label htmlFor="profile-photo">
                <Input accept="image/*" id="profile-photo" type="file"  />
                <Button varient="contained" component="span">Upload Photo</Button>
              </label>
              <label htmlFor="resume-file">
                <Input accept="doc/*" id="resume-file" type="file"  />
                <Button varient="contained" component="span">Upload File</Button>
              </label>
            </Stack> */}
            <Stack direction="row" alignItems="center" spacing={4}>
              {/* <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={changeHandler} />
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label> */}
              <label htmlFor="contained-button-file">
                <Input
                  accept="doc/*"
                  id="contained-button-file"
                  // class="form-control-file"
                  // multiple
                  type="file"
                  name="file_upload"
                  // value={rdoc.file}
                  value={inpval.file}
                  // onChange={changeHandler}
                  onChange={fileChange}
                />
                <Button variant="contained" component="span">
                  {/* <PhotoCamera /> */}Upload Resume
                </Button>
              </label>
            </Stack>
          </div>
          <div>
            <Button type="submit" 
            // onSubmit={addinpdata}
             className="btn btn-default" >
              Save
            </Button>
          </div>
          </form>
        </Box>
      </div>
    </Paper>
  );
};

export default AddCandidate2;
