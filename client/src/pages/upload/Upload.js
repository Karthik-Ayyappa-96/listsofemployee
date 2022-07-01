import { Box, Input, Paper, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Title from "../../Component/Title";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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

const Upload = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [getvendordata, setVendordata] = useState([]);

  const history = useHistory("");

  const [recruiterId, setRecruiterId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [totalExperience, setTotalExperience] = useState();
  const [relaventExperience, setRelaventExperience] = useState();
  const [currentSalary, setCurrentSalary] = useState();
  const [expectedSalary, setExpectedSalary] = useState();
  const [noticePeriod, setNoticePeriod] = useState();
  const [status, setStatus] = useState();
  const [interviewDate, setInterviewDate] = useState();
  const [onboardDate, setOnboardDate] = useState();
  const [anyOffer, setAnyOffer] = useState();
  const [offeredCompany, setOfferedCompany] = useState();
  const [panId, setPanId] = useState();
  const [uanId, setUanId] = useState();
  const [jobRequired, setJobRequired] = useState();
  const [jobDiscription, setJobDiscription] = useState();
  const [expectedJoinDate, setExpectedJoinDate] = useState();
  const [vendorName, setVendorName] = useState();
  const [recruitComments, setRecruitComments] = useState();
  const [file, setFile] = useState(null);

  const onFormsubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("recruiterId", recruiterId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("totalExperience", totalExperience);
    formData.append("relaventExperience", relaventExperience);
    formData.append("currentSalary", currentSalary);
    formData.append("expectedSalary", expectedSalary);
    formData.append("noticePeriod", noticePeriod);
    formData.append("status", status);
    formData.append("interviewDate", interviewDate);
    formData.append("onboardDate", onboardDate);
    formData.append("anyOffer", anyOffer);
    formData.append("offeredCompany", offeredCompany);
    formData.append("panId", panId);
    formData.append("uanId", uanId);
    formData.append("jobRequired", jobRequired);
    formData.append("jobDiscription", jobDiscription);
    formData.append("expectedJoinDate", expectedJoinDate);
    formData.append("vendorName", vendorName);
    formData.append("phoneNo", phoneNo);
    formData.append("recruitComments", recruitComments);
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8003/newcandidate", formData)
      .then((response) => {
        alert("File Uploaded Successfully...!");
        history.push("/userdashboard/home");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const RecruiterIdHandler = (e) => {
    setRecruiterId(e.target.value);
  }
  const NameHandler = (e) => {
    setName(e.target.value);
  }
  const EmailHandler = (e) => {
    setEmail(e.target.value);
  }
  const TotalExperiencHandler = (e) => {
    setTotalExperience(e.target.value);
  }
  const RelaventExperienceHandler = (e) => {
    setRelaventExperience(e.target.value);
  }
  const CurrentSalaryHandler = (e) => {
    setCurrentSalary(e.target.value);
  }
  const ExpectedSalaryHandler = (e) => {
    setExpectedSalary(e.target.value);
  }
  const NoticePeriodHandler = (e) => {
    setNoticePeriod(e.target.value);
  }
  const StatusHandler = (e) => {
    setStatus(e.target.value);
  }
  const InterviewDateHandler = (e) => {
    setInterviewDate(e.target.value);
  }
  const OnboardDateHandler = (e) => {
    setOnboardDate(e.target.value);
  }
  const AnyOfferHandler = (e) => {
    setAnyOffer(e.target.value);
  }
  const OfferedCompanyHandler = (e) => {
    setOfferedCompany(e.target.value);
  }
  const PanIdHandler = (e) => {
    setPanId(e.target.value);
  }
  const UanIdHandler = (e) => {
    setUanId(e.target.value);
  }
  const JobRequiredHandler = (e) => {
    setJobRequired(e.target.value);
  }
  const JobDiscriptionHandler = (e) => {
    setJobDiscription(e.target.value);
  }
  const VendorNameHandler = (e) => {
    setVendorName(e.target.value);
  }
  const PhoneNoHandler = (e) => {
    setPhoneNo(e.target.value);
  }
  const RecruitCommentsHandler = (e) => {
    setRecruitComments(e.target.value);
  }
  const ExpectedJoinDateHandler = (e) => {
    setExpectedJoinDate(e.target.value);
  }
  

  const fileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);

    // if (e.target && e.target.files[0]) {
    //   formData.append("file", e.target.files[0]);
    // }
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
      <form onSubmit={onFormsubmit}>
        <Title>Add Candidate</Title>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Recruiter Id"
              name="recruiterId"
              // value={recruiterId}
              onChange={RecruiterIdHandler}
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
            <TextField
              fullWidth
              id="fullWidth"
              // id="outlined-select-currency"
              // required
              name="name"
              label="Name"
              type="name"
              // value={name}
              onChange={NameHandler}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              name="email"
              label="Email"
              type="email"
              // value={email}
              onChange={EmailHandler}
            />
            <TextField
              id="outlined-select-currency"
              name="phoneNo"
              label="Ph.No"
              type="phoneNo"
              // value={phoneNo}
              onChange={PhoneNoHandler}
            />
            <TextField
              id="outlined-select-currency"
              name="totalExperience"
              label="Total Experience"
              type="totalExperience"
              // value={totalExperience}
              onChange={TotalExperiencHandler}
            />
            <TextField
              id="outlined-select-currency"
              name="relaventExperience"
              label="Relavent Experience"
              type="relaventExperience"
              // value={relaventExperience}
              onChange={RelaventExperienceHandler}
            />
            <TextField
              id="outlined-select-currency"
              name="currentSalary"
              label="Current Salary"
              type="currentSalary"
              // value={currentSalary}
              onChange={CurrentSalaryHandler}
            />
            <TextField
              id="outlined-select-currency"
              name="expectedSalary"
              label="Expected Salary"
              type="expectedSalary"
              // value={expectedSalary}
              onChange={ExpectedSalaryHandler}
            />
            <TextField
              id="outlined-select-currency"
              name="noticePeriod"
              label="Notice Period"
              type="noticePeriod"
              // value={noticePeriod}
              onChange={NoticePeriodHandler}
            />
            <TextField
              id="outlined-select-currency"
              disabled
              name="status"
              label="Status"
              type="status"
              onChange={StatusHandler}
              // value={status}
              SelectProps={{
                native: true,
              }}
            >
              {Status.map((status) => (
                <option key={status.id}>{status.label}</option>
              ))}
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
                disabled
                id="date"
                label="InterView Date"
                type="date"
                // value={interviewDate}
                sx={{ width: 220 }}
                onChange={InterviewDateHandler}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                disabled
                id="date"
                label="Onboard date"
                type="date"
                // value={onboardDate}
                sx={{ width: 220 }}
                onChange={OnboardDateHandler}
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
              // value={anyOffer}
              onChange={AnyOfferHandler}
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
              // value={offeredCompany}
              onChange={OfferedCompanyHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="panId"
              label="Pan Id"
              type="panId"
              // value={panId}
              onChange={PanIdHandler}
            />
            <TextField
              id="outlined-select-currency"
              // required
              name="uanId"
              label="Uan Id"
              type="uanId"
              // value={uanId}
              onChange={UanIdHandler}
            />
            <TextField
              id="outlined-select-currency"
              select
              type="jobRequired"
              label="Job Required"
              name="jobRequired"
              // value={jobRequired}
              onChange={JobRequiredHandler}
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
              name="jobDiscription"
              label="Job Discription"
              type="jobDiscription"
              // value={jobDiscription}
              onChange={JobDiscriptionHandler}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
                id="date"
                name="expectedJoinDate"
                label="Expected Join Date"
                type="Date"
                // value={expectedJoinDate}
                sx={{ width: 220 }}
                onChange={ExpectedJoinDateHandler}
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
              // value={vendorName}
              onChange={VendorNameHandler}
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
              name="recruitComments"
              label="Recruit Comments"
              type="recruitComments"
              // value={FormData.recruitComments}
              onChange={RecruitCommentsHandler}
            />
          </div>
          <div>
            <Input
              type="file"
              name="file"
              onChange={fileChange}
              label="Upload"
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </Box>
      </form>
    </Paper>
  );
};

export default Upload;
