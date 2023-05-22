import React, { useContext } from 'react'
import './dashboard.css'
import { AppContext } from './AppContext'

export default function Selector() {
  const {setWin, query} = useContext(AppContext)

  const cancelHandler = () => {
    setWin('');
  }

  const actionHandler = (tag) => {
    if (query === 'create') {
      setWin(`form.${tag}`);
    }
    if (query === 'select' || query === 'delete') {
      setWin(`select.${tag}`);
    }
  }

  return (
    <div className='selector'>
      <div>
        <h1>Seleccione entidad</h1>
        <button className='selector_button' onClick={cancelHandler}>Cancelar</button>
      </div>
      <ul className='list'>
        <li className='element__list' onClick={() => actionHandler('prog')}> 
          Programador
        </li>
        <li className='element__list' onClick={() => actionHandler('desg')}>
          Diseñador
        </li>
        <li className='element__list' onClick={() => actionHandler('lvds')}>
          Diseñador de Niveles
        </li>
        <li className='element__list' onClick={() => actionHandler('edit')}>
          Editor
        </li>
        <li className='element__list' onClick={() => actionHandler('game')}>
          Juegos
        </li>
        <li className='element__list' onClick={() => actionHandler('inc')}>
          Industrias
        </li>
        <li className='element__list' onClick={() => actionHandler('user')}>
          Usuarios
        </li>
      </ul>
    </div>
  )
}
