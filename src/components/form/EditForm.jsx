import React, { useContext } from "react";
import "./Form.css";
import { createEditor, reportOperation, update } from "../backend/petitions";
import { AppContext } from "../AppContext";

const EditForm = () => {
    const { setWin, auto, SetLoadingState, queryData, query } = useContext(AppContext);


    let [data] = queryData;
    if (query !== "update") {
        data = { name: '', feature: 0, budget: "", website: ""}
    }

    const formHandler = async (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const feature = document.getElementById("classInput").value;
        const budget = document.getElementById("presInput").value;
        const website = document.getElementById("webInput").value;

        console.log(`INFO: Autogenerating is ${auto}`);

        if (auto === "off") {
            if (name === "" || feature === undefined || budget === "" || website === "") {
                alert("Debes llenar todos los campos");
                return;
            }
        }

        SetLoadingState(true);
        let result;
        if (query === 'create')
            result = await createEditor({ name, feature, budget, website });
        else 
            result = await update('editor', { name, feature, budget, website }, data.id);
        SetLoadingState(false);
        reportOperation(result);
    };

    return (
        <form action="" onSubmit={formHandler}>
            <div className="close" onClick={() => setWin("")}></div>
            <h1 className="title">Editor</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" defaultValue={data.name}/>
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input type="text" id="classInput" defaultValue={data.feature}/>
            </div>
            <div>
                <label htmlFor="presInput">Presupuesto:</label>
                <input type="number" id="presInput" defaultValue={data.budget}/>
            </div>
            <div>
                <label htmlFor="webInput">Website:</label>
                <input type="text" id="webInput" defaultValue={data.website}/>
            </div>
            {/* END Input section  */}

            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default EditForm;
