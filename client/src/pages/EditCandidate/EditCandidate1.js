import React, { useState, useEffect } from "react";
import Title from "../../Component/Title";
import axios from "axios";
import { Box, TextField, Paper } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";



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


const EditCandidate1 = () => {
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
    interviewDate: "Enter",
    onboardDate: "Enter",
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

  //   const changeHandler = (e) => {
  //     // setData({ ...data, [e.target.name]: e.target.value });
  //     console.log(e.target.value);
  //     const { name, value } = e.target;
  //     setINP((preval) => {
  //       return {
  //         ...preval,
  //         [name]: value,
  //       };
  //     });
  //   };

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

  //   const updateuser = async (e) => {
  //     e.preventDefault();

  //     const {
  //       recruiterId,
  //       name,
  //       email,
  //       totalExperience,
  //       relaventExperience,
  //       currentSalary,
  //       expectedSalary,
  //       noticePeriod,
  //       status,
  //       interviewDate,
  //       onboardDate,
  //       anyOffer,
  //       offeredCompany,
  //       panId,
  //       uanId,
  //       jobRequired,
  //       jobDiscription,
  //       expectedJoinDate,
  //       vendorName,
  //       phoneNo,
  //       recruitComments
  //     } = inpval;

  //     const res2 = await fetch(`http://localhost:8003/updateuser/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       body: JSON.stringify({
  //         recruiterId,
  //         name,
  //         email,
  //         totalExperience,
  //         relaventExperience,
  //         currentSalary,
  //         expectedSalary,
  //         noticePeriod,
  //         status,
  //         interviewDate,
  //         onboardDate,
  //         anyOffer,
  //         offeredCompany,
  //         panId,
  //         uanId,
  //         jobRequired,
  //         jobDiscription,
  //         expectedJoinDate,
  //         vendorName,
  //         phoneNo,
  //         recruitComments,
  //       }),
  //     });

  //     const data2 = await res2.json();
  //     console.log(data2);

  //     if (res2.status === 422 || !data2) {
  //       alert("fill the data ")
  //     } else {
  //       alert("data added")
  //       history.push("/userdashboard/home");
  //     }
  //   };

  const [status, setStatus] = useState();
  const [interviewDate, setInterviewDate] = useState();
  const [onboardDate, setOnboardDate] = useState();
  // const [file, setFile] = useState(null);

  const onFormsubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("status", status);
    formData.append("interviewDate", interviewDate);
    formData.append("onboardDate", onboardDate);
    //   formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .patch(`http://localhost:8003/updateuser/${id}`, formData,config)
      .then((response) => {
        alert("File Uploaded Successfully...!");
        history.push("/userdashboard/home");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

//   const RecruiterIdHandler = (e) => {
//     setRecruiterId(e.target.value);
//   };
//   const NameHandler = (e) => {
//     setName(e.target.value);
//   };
//   const EmailHandler = (e) => {
//     setEmail(e.target.value);
//   };
//   const TotalExperiencHandler = (e) => {
//     setTotalExperience(e.target.value);
//   };
//   const RelaventExperienceHandler = (e) => {
//     setRelaventExperience(e.target.value);
//   };
//   const CurrentSalaryHandler = (e) => {
//     setCurrentSalary(e.target.value);
//   };
//   const ExpectedSalaryHandler = (e) => {
//     setExpectedSalary(e.target.value);
//   };
//   const NoticePeriodHandler = (e) => {
//     setNoticePeriod(e.target.value);
//   };
  const StatusHandler = (e) => {
    setStatus(e.target.value);
  };
  const InterviewDateHandler = (e) => {
    setInterviewDate(e.target.value);
  };
  const OnboardDateHandler = (e) => {
    setOnboardDate(e.target.value);
  };
//   const AnyOfferHandler = (e) => {
//     setAnyOffer(e.target.value);
//   };
//   const OfferedCompanyHandler = (e) => {
//     setOfferedCompany(e.target.value);
//   };
//   const PanIdHandler = (e) => {
//     setPanId(e.target.value);
//   };
//   const UanIdHandler = (e) => {
//     setUanId(e.target.value);
//   };
//   const JobRequiredHandler = (e) => {
//     setJobRequired(e.target.value);
//   };
//   const JobDiscriptionHandler = (e) => {
//     setJobDiscription(e.target.value);
//   };
//   const VendorNameHandler = (e) => {
//     setVendorName(e.target.value);
//   };
//   const PhoneNoHandler = (e) => {
//     setPhoneNo(e.target.value);
//   };
//   const RecruitCommentsHandler = (e) => {
//     setRecruitComments(e.target.value);
//   };
//   const ExpectedJoinDateHandler = (e) => {
//     setExpectedJoinDate(e.target.value);
//   };

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <form onSubmit={onFormsubmit}>
        <Title>Edit Candidate Form</Title>
        <Box
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
              label="Recruiter Id"
              name="recruiterId"
              value={inpval.recruiterId}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="name"
              label="Name"
              type="name"
              value={inpval.name}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="email"
              label="Email"
              type="email"
              value={inpval.email}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="phoneNo"
              label="Ph.No"
              type="phoneNo"
              value={inpval.phoneNo}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="totalExperience"
              label="Total Experience"
              type="totalExperience"
              value={inpval.totalExperience}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="relaventExperience"
              label="Relavent Experience"
              type="relaventExperience"
              value={inpval.relaventExperience}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="currentSalary"
              label="Current Salary"
              type="currentSalary"
              value={inpval.currentSalary}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="expectedSalary"
              label="Expected Salary"
              type="expectedSalary"
              value={inpval.expectedSalary}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="noticePeriod"
              label="Notice Period"
              type="noticePeriod"
              value={inpval.noticePeriod}
            />
            <TextField
              fullWidth
              select
              id="outlined-select-currency"
              name="status"
              label="Status"
              type="status"
              onChange={StatusHandler}
              // value={status}
              SelectProps={{
                native: true,
              }}
            >
              {Status.map((status, index) => (
                <option key={index}>{status.label}</option>
              ))}
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
                fullWidth
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
                fullWidth
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
              fullWidth
              id="outlined-select-currency"
              disabled
              label="Any Offer"
              name="anyOffer"
              value={inpval.anyOffer}
              />

            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="offeredCompany"
              label="Offered Company"
              type="offeredCompany"
              value={inpval.offeredCompany}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="panId"
              label="Pan Id"
              type="panId"
              value={inpval.panId}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="uanId"
              label="Uan Id"
              type="uanId"
              value={inpval.uanId}
            />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              type="jobRequired"
              label="Job Required"
              name="jobRequired"
              value={inpval.jobRequired}
              />
            <TextField
              multiline
              fullWidth
              id="outlined-select-currency"
              disabled
              name="jobDiscription"
              label="Job Discription"
              type="jobDiscription"
              // value={jobDiscription}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TextField
              fullWidth
              disabled
                id="date"
                name="expectedJoinDate"
                label="Expected Join Date"
                type="Date"
                value={inpval.expectedJoinDate}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>

            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              name="vendorName"
              label="Vendor Name"
              type="vendorName"
              value={inpval.vendorName}
              />
            <TextField
              fullWidth
              id="outlined-select-currency"
              disabled
              multiline
              name="recruitComments"
              label="Recruit Comments"
              type="recruitComments"
              value={inpval.recruitComments}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Box>
      </form>
    </Paper>
  );
};

export default EditCandidate1;
