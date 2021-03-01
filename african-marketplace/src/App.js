import React from 'react';
import {Route} from 'react-router-dom'

// Styling
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

//Components
import MarketingPage from './components/MarketingPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>African Marketplace</h1> */}

      </header>
      <Route path='/marketingPage'>
        <MarketingPage/>
        </Route>
    </div>
  );
}

export default App;
