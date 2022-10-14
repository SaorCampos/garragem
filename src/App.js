import React from 'react';
import DashBoard from './Pages/Dashboard';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListarVeiculo from './Pages/ListarVeiculos';
import AddVeiculo from './Pages/AddVeiculo';
import DetalheVeiculo from './Pages/DetalheVeiculo';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';


export default function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/lista' element={<ListarVeiculo/>}/>
            <Route path='/adicionar' element={<AddVeiculo/>}/>
            <Route path='/detalhes' element={<DetalheVeiculo/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}