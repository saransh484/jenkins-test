import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheNavbar from './components/container/TheNavbar';
import Home from './components/page/Home';

function App() {
  return (
   <div>
   <TheNavbar/>
    <Home/>
   </div>
  );
}

export default App;
