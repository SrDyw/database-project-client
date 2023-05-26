import React, { useContext } from "react";
import "./Form.css";
import { createDesigner, reportOperation, update } from "../backend/petitions";
import { AppContext } from "../AppContext";

const DesgForm = () => {
    const { setWin, auto, SetLoadingState, queryData, query} = useContext(AppContext)

    let [data] = queryData;
    let skills = "";
    if (query === "update") {

        data.skills.map((s, i) => {
            if (i < data.skills.length - 1) skills += s + ", ";
            else skills += s;
        });
    } else data = { name: '', feature: 0}


    const formHandler = async e => {
        e.preventDefault()
        const name = document.getElementById('nameInput').value;
        const feature = document.getElementById('classInput').value;
        const skills = document.getElementById('skillInput').value;

        console.log(`INFO: Autogenerating is ${auto}`);

        if (auto === "off") {
            if (name === "" || feature === undefined || skills === "") {
                alert("Debes llenar todos los campos");
                return;
            }
        }
        SetLoadingState(true);
        let result;
        if (query === 'create')
            result = await createDesigner({name, feature, skills});
        else 
            result = await update('designer', {name, feature, skills}, data.id);

        SetLoadingState(false);
        reportOperation(result);
    }
    return (
        <form action="" onSubmit={formHandler}>
            <div className="close" onClick={() => setWin('')}></div>
            <h1 className="title">Diseñador</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" defaultValue={data.name || ''}/>
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input type="text" id="classInput" defaultValue={data.feature || undefined}/>
            </div>
            <div>
                <label htmlFor="skillInput">habilidades:</label>
                <input type="text" id="skillInput" defaultValue={skills}/>
            </div>
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default DesgForm;
