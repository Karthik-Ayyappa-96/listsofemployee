import React, {useState, useEffect} from "react";
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
import Title from "../../Component/Title";
import DeleteIcon from "@mui/icons-material/Delete";

const AddVendor = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const [inpval, setINP] = useState({
    vendorId: "",
    vendorEmail: "",
    vendorName: "",
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

    const { vendorId, vendorEmail, vendorName } = inpval;

    const res = await fetch("http://localhost:8003/vendordata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vendorId, vendorEmail, vendorName,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("Error");
      console.log("error");
    } else {
      alert("new vendor added ");
      console.log("New Vendor added");
    }
  };

  const getdata = async (e) => {
    // e.preventDefault();

    const res = await fetch("http://localhost:8003/vendorlist", {
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

  const deletevendor = async (id) => {
    const res1 = await fetch(`http://localhost:8003/deletevendor/${id}`, {
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
    <div>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <div>
          <Title>Add Vendor Form</Title>
          <Box
            component="form"
            // onSubmit={addinpdata}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                // required
                name="vendorId"
                label="Vendor Id"
                type="vendorId"
                value={inpval.vendorId}
                onChange={changeHandler}
              />

              <TextField
                fullWidth
                // required
                name="vendorEmail"
                label="Vendor Eamil"
                type="vendorEmail"
                value={inpval.vendorEmail}
                onChange={changeHandler}
              />

              <TextField
                fullWidth
                id="fullWidth"
                // id="outlined-select-currency"
                // required
                name="vendorName"
                label="Vendor Name"
                type="vendorName"
                value={inpval.vendorName}
                onChange={changeHandler}
              />
            </div>
            <div>
              <Button type="submit" onClick={addinpdata}>
                Add
              </Button>
            </div>
          </Box>
        </div>
      </Paper>
      <Toolbar />

      <Paper>
        <React.Fragment>
          <Title>Active Vendor List</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Vendor.Id</TableCell>
                <TableCell>Vendor.Email</TableCell>
                <TableCell>Vendor Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getuserdata.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell>{vendor.vendorId}</TableCell>
                  <TableCell>{vendor.vendorEmail}</TableCell>
                  <TableCell>{vendor.vendorName}</TableCell>
                  <TableCell>
                    <div align="right">
                      {/* <NavLink to={`/userdashboard/details/${users._id}`}>
                        <Button size="sm" varient="danger">
                          <RemoveRedEyeIcon />
                        </Button>
                      </NavLink> */}
                      {/* <Link to={`/userdashboard/editpage/${users._id}`}>
                        <Button size="sm" varient="danger">
                          <EditIcon />
                        </Button>
                      </Link> */}
                      <Button
                        size="sm"
                        onClick={()=>deletevendor(vendor._id)}
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
    </div>
  );
};

export default AddVendor;
