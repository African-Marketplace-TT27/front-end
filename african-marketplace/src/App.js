import React from "react";
import {Route, Switch} from 'react-router-dom'

// Import components
import Login from "./components/Login";
import Signup from "./components/Signup";

// Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

//Components
import MarketingPage from './components/MarketingPage'
import AddProduct from './components/AddProduct'
import SellerDashboard from "./components/SellerDashboard";
import Settings from './components/Settings';
import Orders from './components/Orders';
import Reports from './components/Reports';
import Navigation from './components/Navigation';
import EditItem from './components/EditItem'

function App() {
  return (
    <div className="App">

        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/SellerDashboard" component={SellerDashboard} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Reports" component={Reports} />
          <Route path="/Navigation" component={Navigation} />
          <Route path="/EditItem" component={EditItem}/>
          <Route path="/" component={MarketingPage} />
        </Switch>

    </div>
  );
}

export default App;
