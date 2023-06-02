import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { jobs } from '../data/jobs';

export const ProyectoComponent = () => {

    const {id} = useParams();
    const job = jobs.find(p => p.id === id);

    return (
        <div>
            <br/>
            <h1>DETALLE DEL PROYECTO {job.nombre.toUpperCase()}</h1>
            <div>
                <img src={`/images/${job.id}.png`} />
            </div>
            <Link to={job.url} target='_blank'>{job.url}</Link>
            <p><strong>Descripcion: </strong>{job.descripcion}</p>

        </div>
    )
}
