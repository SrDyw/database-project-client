import React, { useContext, useState } from "react";
import "./Form.css";
import { createLevelDesigner, reportOperation } from "../backend/petitions";
import OperationResult from "./OperationResult";
import { AppContext } from "../AppContext";

const LvlDesForm = () => {
    const [speciality, setSpeciality] = useState("2D");
    const [resultOperation, setResultOperation] = useState("waiting");
    const {setWin} = useContext(AppContext)
    
    const formHandler = async (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const feature = document.getElementById("classInput").value;
        
        console.log("Eje");
        const result = await createLevelDesigner({ name, feature, speciality });

        reportOperation(result);
    };

    return (
        <div className="createInput">
            <form action="" onSubmit={formHandler}>
                <div className="close" onClick={() => setWin("")}></div>
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
                        <input
                            type="radio"
                            id="2D"
                            name="typeDesign"
                            onClick={() => setSpeciality("2D")}
                        />
                        <label htmlFor="2D">2D</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            id="3D"
                            name="typeDesign"
                            onClick={() => setSpeciality("3D")}
                        />
                        <label htmlFor="3D">3D</label>
                    </div>
                </div>
                {/* END Input section  */}

                <button>Ingresar</button>
            </form>
        </div>
    );
};

export default LvlDesForm;
