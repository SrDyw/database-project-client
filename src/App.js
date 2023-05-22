import React, { useEffect, useState, useContext } from "react";
import { AppContextProvider, AppContext } from "./components/AppContext";
import Testing from "./components/Testing/Testing";
<<<<<<< HEAD
import DesignerForm from './components/form/DesgForm'
import EditorForm from './components/form/EditForm'
import LevelDesignerForm from './components/form/LvlDesForm'
import Dashboard from "./components/Dashboard";
import ProgrammerForm from './components/form/ProgForm'
=======
import DesignerForm from "./components/form/DesgForm";
import EditorForm from "./components/form/EditForm";
import LevelDesignerForm from "./components/form/LvlDesForm";
import ProgrammerForm from "./components/form/ProgForm";
import GameForm from "./components/form/GameForm";
import IndustryForm from "./components/form/IndustryForm";
>>>>>>> c4fdf8be2a609521f5c99b023871c70cb42d2b7d
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
<<<<<<< HEAD
    return (
        <Dashboard></Dashboard>
    );
}
=======
    return <EditorForm></EditorForm>;
}
>>>>>>> c4fdf8be2a609521f5c99b023871c70cb42d2b7d
