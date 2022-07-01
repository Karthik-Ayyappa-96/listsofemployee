import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Listitem from "../Listitem/Listitem";
import DateTime from "../../Component/Date";
import { Route, Switch, Link } from "react-router-dom";
import CreatreOrder from "../../pages/AddCandidateForm/AddCandidate2";
import Home from "../../pages/Home/Home";
import ActiveOrders from "../../pages/AddCandidateTable/AddCandidatetable";
import SetReminder from "../../pages/Report/Report";
import AddCandidate2 from "../../pages/AddCandidateForm/AddCandidate2";
import EditCandidate from "../../pages/EditCandidate/EditCandidate";
import Details from "../../pages/Details/Details";
import AddRecruiter from "../../pages/AddRecruiter/AddRecruiter";
import AddVendor from "../../pages/AddVendor/AddVendor";
import Upload from "../../pages/upload/Upload";
import AddCandidate1 from "../../pages/AddCandidateForm/AddCandidate1";
import EditCandidate1 from "../../pages/EditCandidate/EditCandidate1";

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#b0e4f1",
  textAnchor:"none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor:"#9dade2",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function UserDashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", color:"black" // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Arcnas Software Solutions
            </Typography>
            <ul>
              <Link
                to="/"
                style={{textDecoration:"none", color:"black"}}
                onClick={() => localStorage.removeItem("token")}
                // placeHolder="Logout"
              >
                LogOut
              </Link>
            </ul>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailOutlineIcon />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <a href="/profile">
                  <AccountCircleIcon />
                </a>
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <List>{<Listitem />}</List>
          <Divider />
          <Toolbar />
          <Toolbar />
          <Toolbar />
          <br />
          <List sx={{marginLeft: 5}}>{<DateTime />}</List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Switch>
              <Route exact path="/userdashboard/home">
                <Home />
              </Route>
              <Route path="/userdashboard/createorders">
                <CreatreOrder />
              </Route>
              <Route path="/userdashboard/activeorders">
                <ActiveOrders />
              </Route>
              {/* <Route path="/userdashboard/addcandidate">
                <AddCandidate2 />
              </Route> */}

              <Route path="/userdashboard/setreminder">
                <SetReminder />
              </Route>
              <Route exact path="/userdashboard/editpage/:id">
                <EditCandidate />
              </Route>
              <Route exact path="/userdashboard/details/:id">
                <Details />
              </Route>
              <Route exact path="/userdashboard/addrecruiter">
                <AddRecruiter />
              </Route>
              <Route exact path="/userdashboard/addvendor">
                <AddVendor />
              </Route>
              <Route exact path="/userdashboard/addcandidate">
                <Upload />
              </Route>
              {/* <Route exact path="/userdashboard/upload/:id">
                <Upload />
              </Route> */}
              <Route exact path="/userdashboard/addcandidate1">
                <AddCandidate1 />
              </Route>
             
            </Switch>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default UserDashboard;
