import React, { useContext, useState } from "react";
import "./Form.css";
import { AppContext } from "../AppContext";
import { create, reportOperation } from "../backend/petitions";

const ReviewForm = () => {
    const [grade, setGrade] = useState("junnior");
    const { setWin } = useContext(AppContext);

    const formHandler = async (e) => {
        e.preventDefault();
        let title = document.getElementById("title-input").value;
        let creation_date = document.getElementById("date-input").value;
        let feature = document.getElementById("feature-input").value;
        let description = document.getElementById("desc-input").value;
        let id_user = document.getElementById("id-input").value;

        if (title === "") title = null;
        if (creation_date === "") creation_date = null;
        if (description === "") description = null;

        const result = await create(
            { title, creation_date, feature, description, id_user },
            "review"
        );
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
                <input type="text" id="title-input" />
            </div>
            <div>
                <label htmlFor="feature-input">Clasificacion:</label>
                <input type="number" id="feature-input" />
            </div>
            <div>
                <label htmlFor="date-input">Fecha</label>
                <input type="date" id="date-input" />
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
                <input type="text" name="desc-input" id="desc-input" />
            </div>
            <div className="id-input">
                <label htmlFor="id-input">ID Usuario:</label>
                <input type="number" name="id-input" id="id-input" />
            </div>

            {/* END Input Section */}
            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default ReviewForm;
