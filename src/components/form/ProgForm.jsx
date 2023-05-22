import React, { useContext, useEffect, useState } from "react";
import "./Form.css";
import { createProgrammer, reportOperation } from "../backend/petitions";
import { AppContext } from "../AppContext";

const Programmer = () => {
    const [grade, setGrade] = useState("junnior");
    const {setWin} = useContext(AppContext);

    const formHandler = async(e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const feature = document.getElementById("classInput").value;
        const lenguage = document.getElementById("lanInput").value;

        const result = await createProgrammer({ name, feature, grade, lenguage });
        if (reportOperation(result) === 'succesfuly') {
            setWin('')
        }
    };
    return (
        <form action="" onSubmit={formHandler} method="post">
            <div className="close" onClick={() => setWin('')}></div>
            <h1 className="title">Programador</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" />
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input type="number" id="classInput" />
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
                <label htmlFor="lanInput">Lenguages:</label>
                <input type="text" id="lanInput" />
            </div>
            {/* END Input section  */}

            <button>Ingresar</button>
        </form>
    );
};

export default Programmer;
