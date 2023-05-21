import React from 'react'

const GameForm = () => {
  return (
    <form action="">
        <h1 className='title'>Juego</h1>
        {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" />
            </div>
            <div>
                <label htmlFor="date-input">Fecha de lanzamiento:</label>
                <input type="date" id="date-input" />
            </div>
            <div>
                <label htmlFor="gender-input">Género:</label>
                <input type="text" id="gender-input" />
            </div>
            <div>
                <label htmlFor="dim-input">Dimensión:</label>
                <input type="number" id="dim-input" />
            </div>
            <div>
                <label htmlFor="id_industry-input">Industria ID:</label>
                <input type="number" id="id_industry-input" />
            </div>

            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
    </form>
  )
}

export default GameForm