import React from "react";
import {Route, Switch} from 'react-router-dom'

// Import components
import Login from "./components/Login";
import Signup from "./components/Signup";

// Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
 
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
        </Switch>
      
    </div>
  );
}

export default App;
