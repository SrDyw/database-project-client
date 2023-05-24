import React, { useContext } from "react";
import "./dashboard.css";
import { AppContext } from "./AppContext";
import { deleteQuery, select } from "./backend/petitions";

export default function Select() {
    const { setWin, win, setQueryData, setCurrTable, query } =
        useContext(AppContext);

    const formHandler = async (e) => {
        e.preventDefault();

        const t = win.split(".")[1];
        const id = document.getElementById("idInput").value;

        if (query === 'select') {
            const table_dicc = {
                prog: "programmers",
                desg: "designers",
                edit: "editors",
                game: "games",
                lvds: "leveldesigners",
                inc: "industries",
                user: "users",
                user: "users",
                revw: "reviews"

            };
            const select_result = await select(table_dicc[t], id);

            // console.log(select_result);
            if (select_result !== "error") {
                setQueryData(select_result);
                setWin("");
                setCurrTable(table_dicc[t]);
            } else alert("Ha ocurrido un error");
        }
        else {
            const table_dicc = {
                prog: "programmer",
                desg: "designer",
                edit: "editor",
                game: "game",
                lvds: "leveldesigner",
                inc: "industry",
                user: "user",
            };
            const select_result = await deleteQuery(table_dicc[t], id);
            console.log(
                select_result)
            if (select_result.message === "succesfuly") {
                // setQueryData(select_result);
                setWin("");
                setCurrTable(table_dicc[t]);
                alert('Elemento removido correctamente');
            } else alert("Ha ocurrido un error");
        }
    };

    return (
        <div className="select center_element shadow-1">
            <form action="" onSubmit={formHandler}>
                <h1 className="title">
                    {query === "select" ? `Consultar` : "Remover"}
                </h1>
                <input type="text" placeholder="id" id="idInput" />
                <button>Buscar</button>
                <div className="close" onClick={() => setWin("")}></div>
            </form>
        </div>
    );
}
