import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { best_developers, critict_reviews, highers_industries, top_games } from "./backend/petitions";

export default function ProjOperation() {
    const { setWin, setQueryData, setCurrTable } = useContext(AppContext);

    const actionHandler = async(operation) => {
        const action_dicc = {
            'ind' :highers_industries,
            'tgm' : top_games,
            'mdv' : best_developers,
            'rwc' : critict_reviews
        }   

        const result = await action_dicc[operation]();
        console.log(result);
        setQueryData(result);
        if (operation === 'ind')
            setCurrTable('higherInd');
        if (operation === 'tgm')
            setCurrTable('topgames');
        if (operation === 'mdv')
            setCurrTable('bestdev')
        if (operation === 'rwc')
            setCurrTable('wordrev')
    };


    return (
        <div className="proj_oper center_element shadow-1">
            <div className="close" onClick={() => setWin("")}></div>
            <ul className="list">
                <li
                    className="element__list"
                    onClick={() => actionHandler("ind")}
                >
                    Industrias Dominantes
                </li>
                <li
                    className="element__list"
                    onClick={() => actionHandler("tgm")}
                >
                    Top Juegos
                </li>
                <li
                    className="element__list"
                    onClick={() => actionHandler("mdv")}
                >
                    Mejores desarroladores
                </li>
                <li
                    className="element__list"
                    onClick={() => actionHandler("rwc")}
                >
                    Reseñas Críticas
                </li>
            </ul>
        </div>
    );
}
