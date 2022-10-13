import React from 'react';
import DashBoard from './Pages/Dashboard';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListarVeiculo from './Pages/ListarVeiculos';
import AddVeiculo from './Pages/AddVeiculo';
import DetalheVeiculo from './Pages/DetalheVeiculo';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='./Pages/ListarVeiculos' element={<ListarVeiculo/>}/>
            <Route path='./Pages/AddVeiculo' element={<AddVeiculo/>}/>
            <Route path='./Pages/DetalheVeiculo' element={<DetalheVeiculo/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}