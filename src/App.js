// import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartOrders from './components/Cart';
// import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/CartOrders" element={<CartOrders />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
