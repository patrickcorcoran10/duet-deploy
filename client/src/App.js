import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import PostFormBand from "./components/PostFormBand";
import NewUserForm from "./components/NewUserForm";
import Footer from "./components/Footer";
import PostFormMusician from "./components/PostFormMusician";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchForm from "./components/Search";
import SignInForm from "./components/SignInForm";
import Dashboard from "./page-components/DashBoard"


function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Route exact path="/"  component={SignInForm} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/postband" component={PostFormBand} />

        <Route exact path="/newuser" component={NewUserForm} />
        <Route exact path="/usersignin" component={SignInForm} />

        <Route exact path="/postmusician" component={PostFormMusician} />

        <Route exact path="/SearchPage" component={SearchForm} />

        {/* <Route exact path="/about" component={MediaCard} /> */}
      </Router>

      <Footer />
    </div>
  );
}

export default App;
