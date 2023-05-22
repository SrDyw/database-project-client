import React from 'react'
import "./dashboard.css";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div>
          <h1 className='product_name'>Player's Portal</h1>
        </div>
        <ul  className='n__elements'>
          <li className='n__element'>
            <div onClick={console.log("Yamatte")}>Crear</div>
          </li>
          <li className='n__element'>
            <div onClick={console.log("Yamatte")}>Consultar</div>
          </li>
          <li className='n__element'>
            <div onClick={console.log("Yamatte")}>Actualizar</div>
          </li>
          <li className='n__element'>
            <div onClick={console.log("Yamatte")}>Remover</div>
          </li>
        </ul>
    </div>
  )
}
