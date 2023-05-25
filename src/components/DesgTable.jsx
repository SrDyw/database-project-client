import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function DesgTable({ data }) {
    const {setWin, setTable, setQueryData} = useContext(AppContext)

    const OpenActionWin = (data, table) => {
        setWin('selector.operation');
        setQueryData([data]);
        setTable(table);
    }

    return (
        <div className="table_data">
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Clasificacion</th>
                            <th>Habilidades</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} className="element_row" onClick={() => OpenActionWin(d, 'designer')}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.feature}</td>
                                <td>{d.skills.map((s, i) => (
                                    s + ', '
                                ))}</td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td>
                                Robert
                            </td>
                            <td>
                                4
                            </td>
                            <td>
                                SEnior
                            </td>
                            <td>
                                Java
                            </td>
                        </tr> */}
                    </tbody>
                    {/* {data.map((d, i) => <h1 key={i}>{d.name}</h1>)} */}
                </table>
            ) : (
                <h1>No hay datos aun...</h1>
            )}
        </div>
    );
}
