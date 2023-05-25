import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { create, reportOperation } from "../backend/petitions";

const GameForm = () => {
    const { setWin, auto } = useContext(AppContext)

    const formHandler = async(e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const release_date = document.getElementById("date-input").value;
        const gender = document.getElementById("gender-input").value;
        const dimension = document.getElementById("dim-input").value;
        const id_industry = document.getElementById("id_industry-input").value;

        if (auto === "off") {
            if (name === "" || release_date === undefined || gender === '' || dimension === undefined || id_industry === undefined) {
                alert("Debes llenar todos los campos");
                return;
            }
        }


        const result = await create({ name, release_date, gender, dimension, id_industry }, 'game');
        if (reportOperation(result) === 'succesfuly') {
            // setWin('')
        }
    };

    return (
        <form action="" onSubmit={formHandler}>
            <h1 className="title">Juego</h1>
            {/* Input section  */}
            <div className="close" onClick={() => setWin("")}></div>
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
    );
};

export default GameForm;
