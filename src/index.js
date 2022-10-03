import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import {BrowserRouter, Route,Switch} from "react-router-dom"




function App() {
  
  return( 
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
    </Switch>
    </div>  
  )
}

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>, 
document.getElementById("root"));
