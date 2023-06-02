import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNavComponent = () => {


    return (
        <header>
            <h1>Portafolio Fernando Valenzuela</h1>
            <nav>
                <ul className='menu'>
                    <li>
                        <NavLink to="/inicio" className={({ isActive }) => isActive ? 'activo' : ''} >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio" className={({ isActive }) => isActive ? 'activo' : ''} >Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({ isActive }) => isActive ? 'activo' : ''} >Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" className={({ isActive }) => isActive ? 'activo' : ''} >Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'activo' : ''} >Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
