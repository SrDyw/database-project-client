import React from "react";
import "./Form.css";

const UserForm = () => {
    return <form action="">
         <h1>Usuario</h1>
            {/* Input Section */}
            <div>
                <label htmlFor="user-input">Nombre de usuario:</label>
                <input type="text" id="user-input" />
            </div>
            <div>
                <label htmlFor="mail-input">Email:</label>
                <input type="email" id="mail-input" />
            </div>
            <div>
                <label htmlFor="psw-input">Email:</label>
                <input type="password" id="psw-input" />
            </div>

            {/* END Input Section */}
            <button onSubmit={""}>Ingresar</button>
    </form>;
};

export default UserForm;
