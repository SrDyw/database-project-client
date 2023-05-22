import React from "react";
import './Form.css'

const IndustryForm = () => {
    return (
        <form action="">
            <h1 className="title">Industria</h1>
            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" />
            </div>

            <div id="full-stars-example-two">
                <label htmlFor="features-input">Features</label>
                <input type="number" name="features-input" id="features-input" min={1} max={5} step={1}/>
            </div>
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default IndustryForm;

