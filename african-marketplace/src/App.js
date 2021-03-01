import React from 'react';

// Styling
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

// Import Components
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>African Marketplace</h1>
        <AddProduct />
      </header>
    </div>
  );
}

export default App;
