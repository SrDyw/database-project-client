import React, { useEffect, useState } from "react";
import "./Form.css";
import { createProgrammer } from "../backend/petitions";

const Programmer = () => {
    const [grade, setGrade] = useState("junnior");

    const formHandler = (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const feature = document.getElementById("classInput").value;
        const lenguage = document.getElementById("langInput").value;

        createProgrammer({ name, feature, grade, lenguage });
    };
    return (
        <form action="" onSubmit={formHandler} method="post">
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
            <div>
                <label htmlFor="gradeInput">Grado:</label>
                <div className="radio-buttons lvl">
                    <div className="form-group">
                        <input
                            type="radio"
                            id="jn"
                            name="lvlProgrammer"
                            onClick={(e) => setGrade("junior")}
                        />
                        <label htmlFor="jn">Junior</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            id="smsn"
                            name="lvlProgrammer"
                            onClick={(e) => setGrade("semisenior")}
                        />
                        <label htmlFor="smsn">Semi-Senior</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            id="sn"
                            name="lvlProgrammer"
                            onClick={(e) => setGrade("senior")}
                        />
                        <label htmlFor="sn">Senior</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            id="ms"
                            name="lvlProgrammer"
                            onClick={(e) => setGrade("master")}
                        />
                        <label htmlFor="ms">Master</label>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="langInput">Lenguaje(s):</label>
                <textarea
                    placeholder="Ejemplo: Javascript, C#, Java..."
                    rows="20"
                    name="comment[text]"
                    id="langInput"
                    cols="40"
                    className="ui-autocomplete-input"
                    autoComplete="off"
                    role="textbox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                ></textarea>
            </div>

            {/* END Input section  */}

            <button>Ingresar</button>
        </form>
    );
};

export default Programmer;
