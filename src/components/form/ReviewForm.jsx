import React, { useContext, useState } from "react";
import "./Form.css";
import { AppContext } from "../AppContext";
import { create, reportOperation, update } from "../backend/petitions";

const ReviewForm = () => {
    const [grade, setGrade] = useState("junnior");
    const { setWin, auto, SetLoadingState, query, queryData } =
        useContext(AppContext);

    let [data] = queryData;

    if (query !== "update") {
        data = {
            title: "",
            creation_date: undefined,
            description: "",
            feature: undefined,
        };
    }

    const formHandler = async (e) => {
        e.preventDefault();
        let title = document.getElementById("title-input").value;
        let feature = document.getElementById("feature-input").value;
        let description = document.getElementById("desc-input").value;
        let creation_date = document.getElementById("date-input");
        let id_user = document.getElementById("id-input");

        if (creation_date !== null) creation_date = creation_date.value;
        if (id_user !== null) id_user = id_user.value;



        if (title === "") title = null;
        if (creation_date === "") creation_date = null;
        if (description === "") description = null;

        if (auto === "off") {
            if (
                title === null ||
                creation_date === null ||
                description === null
            ) {
                alert("Debes llenar todos los campos");
                return;
            }
        }
        SetLoadingState(true);
        let result;
        
        if (query === 'create') {
            result = await create(
                { title, creation_date, feature, description, id_user },
                "review"
            );
        }
        else  {
            result = await update(
                'review',
                { title, creation_date, feature, description, id_user },
                data.id_user
            );
        }
        SetLoadingState(false);
        if (reportOperation(result) === "succesfuly") {
            // setWin("");
        }
    };
    return (
        <form action="" onSubmit={formHandler}>
            <h1>Reseña</h1>
            <div className="close" onClick={() => setWin("")}></div>
            {/* Input Section */}
            <div>
                <label htmlFor="title-input">Título:</label>
                <input type="text" id="title-input" defaultValue={data.title} />
            </div>
            <div>
                <label htmlFor="feature-input">Clasificacion:</label>
                <input
                    type="number"
                    id="feature-input"
                    defaultValue={data.feature}
                />
            </div>
            {/* <div className="fea-div">
                <label htmlFor="features-input">Features</label>
                <input
                    type="number"
                    name="features-input"
                    id="features-input"
                    min={1}
                    max={5}
                    step={1}
                />
            </div> */}
            <div className="desc-input">
                <label htmlFor="descrp-input">Descripción:</label>
                <input
                    type="text"
                    name="desc-input"
                    id="desc-input"
                    defaultValue={data.description}
                />
            </div>
            {query === "create" ? (
                <>
                    <div>
                        <label htmlFor="date-input">Fecha</label>
                        <input
                            type="date"
                            id="date-input"
                            defaultValue={data.creation_date}
                        />
                    </div>
                    <div className="id-input">
                        <label htmlFor="id-input">ID Usuario:</label>
                        <input type="number" name="id-input" id="id-input" />
                    </div>
                </>
            ) : (
                ""
            )}

            {/* END Input Section */}
            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default ReviewForm;
