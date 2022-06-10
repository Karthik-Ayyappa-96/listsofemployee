import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ReorderIcon from "@mui/icons-material/Reorder";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../../src/App.css";

function Listitem() {
  return (
    <div className="Listitem">
      <a href="/userdashboard/home" className="Listitem-a">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </a>
      {/* <a href="/userdashboard/createorders" className="Listitem-a"> */}
      <a href="/userdashboard/addcandidate" className="Listitem-a">
        <ListItem button>
          <ListItemIcon>
            <ReorderIcon />
          </ListItemIcon>
          <ListItemText primary="Add Candidate" />
        </ListItem>
      </a>
      <a href="/userdashboard/addrecruiter" className="Listitem-a">
        <ListItem button>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Add Recruiter" />
        </ListItem>
      </a>
      <a href="/userdashboard/addvendor" className="Listitem-a">
        <ListItem button>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Add Vendor" />
        </ListItem>
      </a>
      <a href="/userdashboard/setreminder" className="Listitem-a">
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
      </a>
      
    </div>
  );
}

export default Listitem;
