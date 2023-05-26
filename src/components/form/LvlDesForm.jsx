import React, { useContext, useState } from "react";
import "./Form.css";
import { createLevelDesigner, reportOperation, update } from "../backend/petitions";
import OperationResult from "./OperationResult";
import { AppContext } from "../AppContext";

const LvlDesForm = () => {
    const [speciality, setSpeciality] = useState("2D");
    const [resultOperation, setResultOperation] = useState("waiting");
    const {setWin, SetLoadingState, queryData, query} = useContext(AppContext)

    let [data] = queryData;
    if (query !== "update") {
        data = { name: '', feature: 0}
    }  
    
    const formHandler = async (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const feature = document.getElementById("classInput").value;
        
        SetLoadingState(true);
        let result;
        if (query === "create")
            result = await createLevelDesigner({ name, feature, speciality });
        else
            result = await update('leveldesigner', { name, feature, speciality }, data.id);
        SetLoadingState(false);

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
                    <input type="text" id="nameInput" defaultValue={data.name}/>
                </div>
                <div>
                    <label htmlFor="classInput">Clasificación:</label>
                    <input type="text" id="classInput" defaultValue={data.feature}/>
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
