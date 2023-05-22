import React, { useEffect, useState, useContext } from "react";
import { AppContextProvider, AppContext } from "./components/AppContext";
import Testing from "./components/Testing/Testing";
import DesignerForm from "./components/form/DesgForm";
import EditorForm from "./components/form/EditForm";
import LevelDesignerForm from "./components/form/LvlDesForm";
import ProgrammerForm from "./components/form/ProgForm";
import GameForm from "./components/form/GameForm";
import IndustryForm from "./components/form/IndustryForm";
export default function App() {
    // const [data, setData] = useState([{}]);
    // const x = useContext(AppContext);

    // useEffect(() => {
    //     fetch("http://localhost:4000/api")
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch(e => console.log("Error de la conexion"));
    // }, []);

    // console.log(x);
    return <EditorForm></EditorForm>;
}
