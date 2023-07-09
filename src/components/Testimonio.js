import React from 'react'
import  '../hojasDeEstilo/Testimonio.css';

export const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} alt='Foto de Ana'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='descripcion-testimonio'>"{props.descripcion}"</p>
      </div>
    </div>

  )
}

