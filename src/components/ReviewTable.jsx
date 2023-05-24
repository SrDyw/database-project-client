import React from "react";

export default function ReviewTable({ data }) {
    const date = new Date();

    return (
        <div className="table_data">
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Fecha</th>
                            <th>Clasificacion</th>
                            <th>Descripcion</th>
                            <th>Usuario </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} className="element_row">
                                <td>{d.title}</td>
                                <td>{d.creation_date.split('T')[0]}</td>
                                <td>{d.feature}</td>
                                <td>{d.description}</td>
                                <td>{d.id_user}</td>
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
