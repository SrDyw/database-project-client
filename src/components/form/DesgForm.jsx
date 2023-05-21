import React from "react";
import "./Form.css";

const DesgForm = () => {
    return (
        <form action="">
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
