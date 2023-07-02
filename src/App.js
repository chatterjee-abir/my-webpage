import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyTopRow from './components/MyTopRow';
import MyHomePage from './components/MyHomePage';
import PuneBirds from './components/PuneBirds';
import SattalBirds from './components/SattalBirds';
import SoleBirdImage from './components/SoleBirdImage';
import NorthBengalBirds from './components/NorthBengalBirds';
import KhismaBirds from './components/KhismaBirds';
import SikkimBirds from './components/SikkimBirds';
import ThattekadBirds from './components/ThattekadBirds';
import MangalajodiBirds from './components/MangalajodiBirds';
import GaneshgudiBirds from './components/GaneshgudiBirds';
import KolkataOutskirtsBirds from './components/KolKataOutskirtsBirds';
import NeighbourhoodBirds from './components/NeighbourhoodBirds';
import BirdJungleSelector from './components/BirdJungleSelector';
import BandhavgarhTR from './components/BandhavgarhTR';
import UmredTadobaTR from './components/UmredTadobaTR';
import TadobaTR from './components/TadobaTR';
import KanhaTR from './components/KanhaTR';
import SundarbanTR from './components/SundarbanTR';
import MammalsJungleSelector from './components/MammalsJungleSelector';




function App() {

  return (
    <div className="App">
      <MyTopRow />
      <Routes>
        <Route path='/' element={<MyHomePage />} />
        <Route path='Birds' element={<BirdJungleSelector />} />
        <Route path='Mammals' element={<MammalsJungleSelector />} />
        <Route path='PuneBirds' element={<PuneBirds />} />
        <Route path='SattalBirds' element={<SattalBirds />} />
        <Route path='NorthBengalBirds' element={<NorthBengalBirds />} />
        <Route path='KhismaBirds' element={<KhismaBirds />} />
        <Route path='SikkimBirds' element={<SikkimBirds />} />
        <Route path='ThattekadBirds' element={<ThattekadBirds />} />
        <Route path='MangalajodiBirds' element={<MangalajodiBirds />} />
        <Route path='NeighbourhoodBirds' element={<NeighbourhoodBirds />} />
        <Route path='KolkataOutskirtsBirds' element={<KolkataOutskirtsBirds />} />
        <Route path='GaneshgudiBirds' element={<GaneshgudiBirds />} />

        <Route path='Bandhavgardh' element={<BandhavgarhTR />} />
        <Route path='UmredTadoba' element={<UmredTadobaTR />} />
        <Route path='Tadoba' element={<TadobaTR />} />
        <Route path='Kanha' element={<KanhaTR />} />
        <Route path='Sundarban' element={<SundarbanTR />} />


        <Route path='/SoleBirdImage' element={<SoleBirdImage />} />
      </Routes>




    </div>
  );
}

export default App;
