import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ReorderIcon from "@mui/icons-material/Reorder";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./listItem.css";


function Listitem() {
  return (
    <div 
    className="Listitem"
    >
      <a href="/userdashboard/home" className="list-a" >
        <ListItem button >
          <ListItemIcon>
            <HomeIcon className="list-a"/>
          </ListItemIcon>
          <ListItemText  className="list-a" primary="Home" />
        </ListItem>
      </a>
      {/* <a href="/userdashboard/createorders" className="Listitem-a"> */}
      <a href="/userdashboard/addcandidate" className="list-a">
        <ListItem button >
          <ListItemIcon>
            <ReorderIcon className="list-a"/>
          </ListItemIcon>
          <ListItemText className="list-a" primary="Add Candidate" />
        </ListItem>
      </a>
      {/* <a href="/userdashboard/addcandidate1" className="list-a">
        <ListItem button >
          <ListItemIcon>
            <ReorderIcon className="list-a"/>
          </ListItemIcon>
          <ListItemText className="list-a" primary="Add Candidate 1" />
        </ListItem>
      </a> */}
      <a href="/userdashboard/addrecruiter" className="list-a">
        <ListItem button >
          <ListItemIcon>
            <AddCircleOutlineIcon className="list-a" />
          </ListItemIcon>
          <ListItemText className="list-a" primary="Add Recruiter" />
        </ListItem>
      </a>
      <a href="/userdashboard/addvendor" className="list-a">
        <ListItem button >
          <ListItemIcon>
            <AddCircleOutlineIcon className="list-a" />
          </ListItemIcon >
          <ListItemText className="list-a" primary="Add Vendor" />
        </ListItem>
      </a>
      <a href="/userdashboard/setreminder" className="list-a">
        <ListItem button  >
          <ListItemIcon>
            <HistoryIcon className="list-a"/>
          </ListItemIcon>
          <ListItemText className="list-a" primary="Report" />
        </ListItem>
      </a>
      {/* <a href="/userdashboard/upload" className="list-a">
        <ListItem button  >
          <ListItemIcon>
            <HistoryIcon className="list-a"/>
          </ListItemIcon>
          <ListItemText className="list-a" primary="Uploads" />
        </ListItem>
      </a> */}
    </div>
  );
}

export default Listitem;
