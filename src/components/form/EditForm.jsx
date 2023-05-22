import React, { useContext } from "react";
import "./Form.css";
import { createEditor, reportOperation } from "../backend/petitions";
import { AppContext } from "../AppContext";

const EditForm = () => {
    const { setWin } = useContext(AppContext)

    const formHandler = async e => {
        e.preventDefault()
        const name = document.getElementById('nameInput').value;
        const feature = document.getElementById('classInput').value;
        const budget = document.getElementById('presInput').value;
        const website = document.getElementById('webInput').value;

        const result = await createEditor({name, feature, budget, website});
        reportOperation(result);
    }

    return (
        <form action="" onSubmit={formHandler}>
            <div className="close" onClick={() => setWin('')}></div>
            <h1 className="title">Editor</h1>

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
                <label htmlFor="presInput">Presupuesto:</label>
                <input type="number" id="presInput" />
            </div>
            <div>
                <label htmlFor="webInput">Website:</label>
                <input type="text" id="webInput" />
            </div>
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default EditForm;
