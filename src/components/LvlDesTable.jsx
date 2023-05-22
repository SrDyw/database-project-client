import React from "react";

export default function LvlDesTable({ data }) {
    return (
        <div className="table_data">
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Clasificacion</th>
                            <th>Especilidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} className="element_row">
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.feature}</td>
                                <td>{d.speciality}</td>
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
