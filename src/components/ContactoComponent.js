import React from 'react'

export const ContactoComponent = () => {
  return (
    <div>
        <h1>Contacto</h1>
        <form>
            <input type='text' name='nombre' placeholder='Nombre' />
            <input type='text' name='apellido' placeholder='Apellido' />
            <input type='text' name='email' placeholder='Email' />
            <textarea  name='nombre' placeholder='motivo' ></textarea>
            <div className='botonera'>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    </div>
  )
}
