import React from "react";
import {Route, Switch} from 'react-router-dom'

// Import components
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./utility/PrivateRoute"
import SellerProductCard from "./components/SellerProductCard"

// Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

//Components
import MarketingPage from './components/MarketingPage'
import Products from "./components/Products";
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
          
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/products/:id" component={SellerProductCard}/>
          <PrivateRoute path="/Settings" component={Settings} />
          <PrivateRoute path="/Orders" component={Orders} />
          <PrivateRoute path="/Reports" component={Reports} />
          <PrivateRoute path="/Navigation" component={Navigation} />
          <PrivateRoute path="/EditItem" component={EditItem}/>

          <Route path="/" component={MarketingPage} />
        </Switch>

    </div>
  );
}

export default App;
