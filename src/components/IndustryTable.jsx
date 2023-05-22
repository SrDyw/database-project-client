import React from "react";

export default function IndustryTable({ data }) {
    const date = new Date();

    return (
        <div className="table_data">
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Clasificacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} className="element_row">
                                <td>{d.id_industry}</td>
                                <td>{d.name_industry}</td>
                                <td>{d.feature}</td>
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
