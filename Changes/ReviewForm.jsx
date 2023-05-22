import React from "react";
import "./Form.css";

const ReviewForm = () => {
    return (
        <form action="">
            <h1>Reseña</h1>
            {/* Input Section */}
            <div>
                <label htmlFor="title-input">Título:</label>
                <input type="text" id="title-input" />
            </div>

            <div className="fea-div">
                <label htmlFor="features-input">Features</label>
                <input type="number" name="features-input" id="features-input" min={1} max={5} step={1}/>
            </div>
            <div>
                <label htmlFor="descrp-input">Descripción:</label>
                <textarea
                    placeholder="Recuerda cambiar esto."
                    rows="20"
                    name="comment[text]"
                    id="descrp-input"
                    cols="40"
                    className="ui-autocomplete-input"
                    autoComplete="off"
                    role="textbox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                ></textarea>
            </div>

            {/* END Input Section */}
            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default ReviewForm;
