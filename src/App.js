import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage"
import NewProjectPage from "./pages/NewProjectPage"
import "./App.css";

function App() {
  return (
    <Router>
      <div> 

      <div id="header"> 
        <Header />
        <Nav />
      </div>

        <Switch>

          <Route path="/projects/:id">
            <ProjectPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/newproject">
            <NewProjectPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
