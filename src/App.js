import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Birds from "./components/Birds";
import Mammals from "./components/Mammals";
import Sample from './components/Sample';
import { Route, Routes } from 'react-router-dom';
import MyTopRow from './components/MyTopRow';
import MyHomePage from './components/MyHomePage';



function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MyHomePage />} />
        <Route path='Birds' element={<Birds />} />
        <Route path='Mammals' element={<Mammals />} />
      </Routes>




    </div>
  );
}

export default App;
