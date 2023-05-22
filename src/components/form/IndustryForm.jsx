import React, { useContext } from "react";
import './Form.css'
import { AppContext } from "../AppContext";
import { create, createIndustry, reportOperation } from "../backend/petitions";

const IndustryForm = () => {
    const { setWin } = useContext(AppContext)

    const formHandler = async e => {
        e.preventDefault();
        const name_industry = document.getElementById('nameInput').value;
        const feature = document.getElementById('features-input').value;
        
        const result = await create({name_industry, feature}, 'industry');

        reportOperation(result);
    }

    return (
        <form action="" onSubmit={formHandler}>
            <div className="close" onClick={() => setWin('')}></div>
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

            <button>Ingresar</button>
        </form>
    );
};

export default IndustryForm;

