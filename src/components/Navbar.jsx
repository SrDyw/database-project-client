import React, { useContext } from 'react'
import "./dashboard.css";
import { AppContext } from './AppContext';

export default function Navbar() {
  const {setWin, setQuery} = useContext(AppContext)
  const createHandler = () => {
    setQuery('create');
    setWin('selector');
  }
  const consultHandler = () => {
    setQuery('select');
    setWin('selector');
  }

  const removeHandler = () => {
    setQuery('delete');
    setWin('selector');
  }

  const operationHandler = () => {
    setQuery('none');
    setWin('selector.projOperation');
  }
  return (
    <div className='navbar'>
        <div>
          <h1 className='app_name'>
            <span>Player's</span>
            <span>Portal</span>
          </h1>
        </div>
        <ul  className='n__elements'>
          <li className='n__element' onClick={createHandler}>
            <div>Crear</div>
          </li>
          <li className='n__element'onClick={consultHandler}>
            <div>Consultar</div>
          </li>
          <li className='n__element' onClick={removeHandler}>
            <div>Remover</div>
          </li>
          <li className='n__element' onClick={operationHandler}>
            <div>Operaciones</div>
          </li>
        </ul>
    </div>
  )
}
