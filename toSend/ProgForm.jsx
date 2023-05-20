import React from "react";
import "./Form.css";

const Programmer = () => {
    return (
        <form action="">
            <h1 className="title">Programador</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" />
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input type="text" id="classInput" />
            </div>
            <div className="radio-buttons lvl">
                <div className="form-group">
                    <input type="radio" id="jn" name="lvlProgrammer" />
                    <label htmlFor="jn">Junior</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="smsn" name="lvlProgrammer" />
                    <label htmlFor="smsn">Semi-Senior</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="sn" name="lvlProgrammer" />
                    <label htmlFor="sn">Senior</label>
                </div>
                <div className="form-group">
                    <input type="radio" id="ms" name="lvlProgrammer" />
                    <label htmlFor="ms">Master</label>
                </div>
            </div>
            <div>
            <label htmlFor="langInput">Lenguaje(s):</label>
            <textarea placeholder="Recuerda modificar esta parte" rows="20" name="comment[text]" id="langInput" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
            </div>
            
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default Programmer;
