import React, { useContext } from "react";
import "./Form.css";
import { createDesigner, reportOperation } from "../backend/petitions";
import { AppContext } from "../AppContext";

const DesgForm = () => {
    const { setWin } = useContext(AppContext)
    const formHandler = async e => {
        e.preventDefault()
        const name = document.getElementById('nameInput').value;
        const feature = document.getElementById('classInput').value;
        const skills = document.getElementById('skillInput').value;

        const result = await createDesigner({name, feature, skills});
        reportOperation(result);
    }
    return (
        <form action="" onSubmit={formHandler}>
            <div className="close" onClick={() => setWin('')}></div>
            <h1 className="title">Diseñador</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" />
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input type="text" id="classInput" />
            </div>
            <div>
                <label htmlFor="skillInput">habilidades:</label>
                <input type="text" id="skillInput" />
            </div>
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default DesgForm;
