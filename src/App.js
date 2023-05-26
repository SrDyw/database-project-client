import React, { useEffect, useState, useContext } from "react";
import Dashboard from "./components/Dashboard";
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
    return (
        <>
        <Dashboard></Dashboard>
        </>
    );
}

