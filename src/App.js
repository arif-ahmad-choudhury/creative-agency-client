import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/LandingPage/Home/Home";
import Order from "./components/CustomerPage/Order/Order";
import ServicesList from "./components/AdminPage/ServicesList/ServicesList";
import AddServices from "./components/AdminPage/AddServices/AddServices";
import Review from "./components/CustomerPage/Review/Review";
import MakeAdmin from "./components/AdminPage/MakeAdmin/MakeAdmin";
import CustomerServiceList from "./components/CustomerPage/CustomerServiceList/CustomerServiceList";
import AdminPage from "./components/AdminPage/AdminPage";
import SuccessFul from "./components/SuccessFul/SuccessFul";



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>         
        <Switch>
          <Route path="/home">
            <Home />
          </Route> 
          <Route path="/succeess">
            <SuccessFul />
          </Route> 
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/adminPage">
            <AdminPage/>
          </PrivateRoute>
          <PrivateRoute path="/+">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/customerServiceList">
            <CustomerServiceList/>
          </PrivateRoute>
          <PrivateRoute path="/servicesList">
            <ServicesList/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddServices/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>      
      </Router>
    </UserContext.Provider>
  );
}

export default App;
