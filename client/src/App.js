import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import CreatreOrder from "./Pages/AddCandidateForm/Form";
// import Home from "./Pages/Home/Home";
// import ActiveOrders from "./Pages/Add Candidate Table/AddCandidateTable";
// import SetReminder from "./Pages/Report/Report";
// import Edit from "./Pages/EditPage/Edit";
// import AddCandidate2 from "./Pages/AddCandidateForm/AddCandidate2";
// import CreatreOrder from "./Pages/AddCandidateForm/Form";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <UserDashboard /> */}
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Switch>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/userdashboard/*">
            <UserDashboard />
          </Route>
          {/* <Route path="/userdashboard/addcandidate">
          <AddCandidate2 />
        </Route>
        <Route path="/userdashboard/home">
          <Home />
        </Route>
        <Route path="/userdashboard/activeorders">
          <ActiveOrders />
        </Route>
        <Route path="/userdashboard/createorders">
          <CreatreOrder />
        </Route>

        <Route path="/userdashboard/setreminder">
          <SetReminder />
        </Route>
        <Route  path="/userdashboard/editpage">
          <Edit />
        </Route> */}
        </Switch>
      </Router>
    </>
  );
}
export default App;
