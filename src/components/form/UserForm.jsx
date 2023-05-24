import React, { useContext, useState } from "react";
import "./Form.css";
import { AppContext } from "../AppContext";
import { create, reportOperation } from "../backend/petitions";

const UserForm = () => {
    const [grade, setGrade] = useState("junnior");
    const { setWin } = useContext(AppContext);

    const formHandler = async (e) => {
        e.preventDefault();
        let username = document.getElementById("user-input").value;
        let mail = document.getElementById("mail-input").value;
        let pass = document.getElementById("psw-input").value;

        if (username === "") username = null;
        if (mail === "") mail = null;
        if (pass === "") pass = null;

        const result = await create({ username, mail, pass }, "user");
        if (reportOperation(result) === "succesfuly") {
            setWin("");
        }
    };
    return (
        <form action="" onSubmit={formHandler}>
            <h1>Usuario</h1>
            {/* Input Section */}
            <div className="close" onClick={() => setWin("")}></div>
            <div>
                <label htmlFor="user-input">Nombre de usuario:</label>
                <input type="text" id="user-input" />
            </div>
            <div>
                <label htmlFor="mail-input">Email:</label>
                <input type="email" id="mail-input" />
            </div>
            <div>
                <label htmlFor="psw-input">Contraseña:</label>
                <input type="password" id="psw-input" />
            </div>

            {/* END Input Section */}
            <button onSubmit={""}>Ingresar</button>
        </form>
    );
};

export default UserForm;
