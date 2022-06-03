import { Paper, Toolbar } from "@mui/material";
import React from "react";
import Title from "../../Component/Title";

export default function SetReminder() {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <div>
        <Title>Report</Title>
      </div>
      <div>
        <Toolbar/>
        <h3 align="middle">Active Job Openings</h3>
        <h3 align="middle">Onboard Candidate</h3>
        <Toolbar/>
        
      </div>
    </Paper>
  );
}
