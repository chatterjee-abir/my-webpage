// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import MyContainer from './components/MyContainer';


import React from 'react';
import Birds from './components/Birds';
import Mammals from './components/Mammals';
import Reptiles from './components/Reptiles';
import Sample from './components/Sample';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/Birds' element={<Birds />} />
          <Route path='/Mammals' element={<Mammals />} />
          <Route path='/Reptiles' element={<Reptiles />} />
        </Routes>

      </BrowserRouter>

      <Sample />
      {/* <MyContainer /> */}



    </div>
  );
}

export default App;
