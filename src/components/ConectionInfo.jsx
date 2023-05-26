import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function ConectionInfo() {
    const { SetConnection, setWin } = useContext(AppContext);
    return (
        <div className="connection_container">
            <div className="connection_win shadow-1">
                <h2>Error de conexion</h2>
                <h4>Pagina en modo offline</h4>
                <button onClick={() => setWin("")}>Aceptar</button>
            </div>
        </div>
    );
}
