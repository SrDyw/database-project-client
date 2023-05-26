import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { create, reportOperation, update } from "../backend/petitions";

const GameForm = () => {
    const { setWin, auto, SetLoadingState, query, queryData } =
        useContext(AppContext);

    let [data] = queryData;

    if (query !== "update") {
        data = {
            name: "",
            release_date: undefined,
            gender: "",
            id_industry: undefined,
            dimension: undefined,
        };
    }

    const formHandler = async (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const gender = document.getElementById("gender-input").value;
        const id_industry = document.getElementById("id_industry-input").value;

        const release_date = document.getElementById("date-input");
        const dimension = document.getElementById("dim-input");

        if (release_date !== null) release_date = release_date.value;
        if (dimension !== null) release_date = release_date.value;

        if (auto === "off") {
            if (
                name === "" ||
                release_date === undefined ||
                gender === "" ||
                dimension === undefined ||
                id_industry === undefined
            ) {
                alert("Debes llenar todos los campos");
                return;
            }
        }

        SetLoadingState(true);
        let result;
        if (query !== "update")
            result = await create(
                { name, release_date, gender, dimension, id_industry },
                "game"
            );
        else
            result = await update(
                "game",
                { name, release_date, gender, dimension, id_industry },
                data.id_game
            );
        SetLoadingState(false);
        if (reportOperation(result) === "succesfuly") {
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
                <input type="text" id="nameInput" defaultValue={data.name} />
            </div>
            {query !== "update" ? (
                <>
                    <div>
                        <label htmlFor="date-input">
                            Fecha de lanzamiento:
                        </label>
                        <input
                            type="date"
                            id="date-input"
                            defaultValue={data.release_date}
                        />
                    </div>
                    <div>
                        <label htmlFor="dim-input">Dimensión:</label>
                        <input
                            type="number"
                            id="dim-input"
                            defaultValue={data.dimension}
                        />
                    </div>
                </>
            ) : (
                ""
            )}
            <div>
                <label htmlFor="gender-input">Género:</label>
                <input
                    type="text"
                    id="gender-input"
                    defaultValue={data.gender}
                />
            </div>
            <div>
                <label htmlFor="id_industry-input">Industria ID:</label>
                <input
                    type="number"
                    id="id_industry-input"
                    defaultValue={data.id_industry}
                />
            </div>

            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default GameForm;
