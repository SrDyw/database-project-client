import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function HighersIndustriesTable({ data }) {
    console.log(data);

    const {setWin, setQueryData, setTable} = useContext(AppContext);

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
                           
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} className="element_row" onClick={() => OpenActionWin(d, 'industry')}>
                                <td>{d.id}</td>
                                <td>{d.name_industry}</td>
                                
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
