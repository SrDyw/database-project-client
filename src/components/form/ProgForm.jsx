import React, { useContext, useEffect, useState } from "react";
import "./Form.css";
import {
    createProgrammer,
    reportOperation,
    update,
} from "../backend/petitions";
import { AppContext } from "../AppContext";

const Programmer = () => {
    const [grade, setGrade] = useState("junnior");
    const { setWin, query, queryData, auto} = useContext(AppContext);

    let [data] = queryData;
    let len = "";
    if (query === "update") {

        data.lenguages.map((l, i) => {
            if (i < data.lenguages.length - 1) len += l + ", ";
            else len += l;
        });
    } else data = { name: '', feature: 0}
    
    const formHandler = async (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value;
        const feature = document.getElementById("classInput").value;
        const lenguage = document.getElementById("lanInput").value;

        let result;

        if (query === "create") {
            console.log(`INFO: Autogenerating is ${auto}`);
            
            if (auto === 'off') {
                if (name === '' || feature === undefined || lenguage === '') {
                    alert('Debes llenar todos los campos');
                    return;
                }
            }
            result = await createProgrammer({ name, feature, grade, lenguage });
            console.log(result);
        }
        if (query === "update") {
            const data = { name, feature, grade, lenguage };
            // console.log(data);
            result = await update(
                "programmer",
                data,
                queryData[0].id
            );
            
        }

        if (reportOperation(result) === "succesfuly") {
            setWin("");
        }
    };
    return (
        <form action="" onSubmit={formHandler} method="post">
            <div className="close" onClick={() => setWin("")}></div>
            <h1 className="title">Programador</h1>

            {/* Input section  */}
            <div>
                <label htmlFor="nameInput">Nombre:</label>
                <input
                    type="text"
                    id="nameInput"
                    defaultValue={data.name || ""}
                />
            </div>
            <div>
                <label htmlFor="classInput">Clasificación:</label>
                <input
                    type="number"
                    id="classInput"
                    defaultValue={data.feature || ''}
                />
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
                <input type="text" id="lanInput" defaultValue={len} />
            </div>
            {/* END Input section  */}

            <button>Ingresar</button>
        </form>
    );
};

export default Programmer;
