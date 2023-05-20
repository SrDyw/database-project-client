import React from "react";
import "./Form.css";

const LvlDesForm = () => {
    return (
        <form action="">
            <h1 className="title">Diseñador de niveles</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" />
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input type="text" id="classInput" />
            </div>
            <div className="radio-buttons">
                <div className="form-group">
                    <input type="radio" id="2D" name="typeDesign" checked />
                    <label htmlFor="2D">2D</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="3D" name="typeDesign" />
                    <label htmlFor="3D">3D</label>
                </div>
            </div>
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default LvlDesForm;