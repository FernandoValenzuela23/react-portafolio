import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { InicioComponent } from '../components/InicioComponent';
import { ServiciosComponent } from '../components/ServiciosComponent';
import { CurriculumComponent } from '../components/CurriculumComponent';
import { ContactoComponent } from '../components/ContactoComponent';
import { FooterComponent } from '../components/layout/FooterComponent';
import { HeaderNavComponent } from '../components/layout/HeaderNavComponent';
import { PortafolioComponent } from '../components/PortafolioComponent';
import { ProyectoComponent } from '../components/ProyectoComponent';

export const RouteConfig = () => {
  return (
    <BrowserRouter>
        <HeaderNavComponent />
        
        <section className='content'>
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<InicioComponent />} />
                <Route path="/portafolio" element={<PortafolioComponent />} />
                <Route path="/servicios" element={<ServiciosComponent />} />
                <Route path="/curriculum" element={<CurriculumComponent />} />
                <Route path="/contacto" element={<ContactoComponent />} />
                <Route path="/portafolio/:id" element={<ProyectoComponent />} />
                <Route path="*" element={<h3>Error 404: No encontrado</h3>} />
            </Routes>
        </section>        

        <FooterComponent />
    </BrowserRouter>
  )
}
