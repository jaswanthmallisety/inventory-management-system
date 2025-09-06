import React from 'react';
import './App.css';
import Products from './components/Products';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cloud-Based Inventory Management System</h1>
      </header>
      <main className="container">
        <Products />
        <Inventory />
      </main>
    </div>
  );
}

export default App;