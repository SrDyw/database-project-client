import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import { deleteQuery } from "./backend/petitions";

export default function Action() {
    const { setWin, queryData, table, setQuery } = useContext(AppContext);

    const deleteHandler = async() => {
        const [ data ] = queryData;

        const result = await deleteQuery(table, data.id || data.id_game || data.id_industry || data.id_user);
        if (result.message === 'succesfuly') {
            alert('Elemento eliminado');
        }
        else {
            alert('Ocurrio un error');
        }
    }
    const table_dicc = {
        "programmer" : 'prog',
    }

    const updateHandler = () => {
        setWin(`form.${table_dicc[table]}`)
        setQuery('update');
    }

    return (
        <div className="action_selector center_element shadow-1">
            <h1 className="title">Operacion</h1>
            <div className="list_container">
                <ul className="list">
                    <li className="element__list" onClick={deleteHandler}>Eliminar</li>
                </ul>
            </div>
            <div className="close" onClick={() => setWin("")}></div>
        </div>
    );
}
