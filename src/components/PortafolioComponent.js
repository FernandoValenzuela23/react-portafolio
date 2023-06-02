import React from 'react'
import { jobs } from "../data/jobs";
import { Link } from 'react-router-dom';

export const PortafolioComponent = () => {
  return (
    <div>
        <h1>Portafolio</h1>
        <p>A continuacion muestro algunos de mis trabajos...</p>
        <br/>
        {
            jobs.map(j => {
                return (<article key={j.id} >
                    <div>
                        <img src={`/images/${j.id}.png`} />
                    </div>
                    <h3>{j.nombre}</h3>
                    <Link to={`/portafolio/${j.id}`}>Ver Detalle</Link>
                    <p>{j.descripcion}</p>
                </article>)
            })
        }

    </div>
  )
}
