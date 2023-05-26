import React, { useContext } from "react";
import './Form.css'
import { AppContext } from "../AppContext";
import { create, createIndustry, reportOperation, update } from "../backend/petitions";

const IndustryForm = () => {
    const { setWin, auto, SetLoadingState, query, queryData } = useContext(AppContext)


    let [data] = queryData;

    if (query !== 'update') {
        data = {name_industry:'', feature: undefined}
    }
    const formHandler = async e => {
        e.preventDefault();
        const name_industry = document.getElementById('nameInput').value;
        const feature = document.getElementById('features-input').value;
        
        if (auto === "off") {
            if (name_industry === "" || feature === undefined) {
                alert("Debes llenar todos los campos");
                return;
            }
        }
        SetLoadingState(true);
        let result;
        if (query === 'create')
            result = await create({name_industry, feature}, 'industry');
        else 
            result = await update('industry', {name_industry, feature}, data.id_industry);

        SetLoadingState(false);
        reportOperation(result);
    }

    return (
        <form action="" onSubmit={formHandler}>
            <div className="close" onClick={() => setWin('')}></div>
            <h1 className="title">Industria</h1>
            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input type="text" id="nameInput" defaultValue={data.name_industry}/>
            </div>

            <div id="full-stars-example-two">
                <label htmlFor="features-input">Features</label>
                <input type="number" name="features-input" id="features-input" min={1} max={5} step={1} defaultValue={data.feature}/>
            </div>
            {/* END Input section  */}

            <button>Ingresar</button>
        </form>
    );
};

export default IndustryForm;

