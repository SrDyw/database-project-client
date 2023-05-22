import React from "react";
import "./dashboard.css";

export default function ListGenerator({ values }) {
    
    // return (
    //     <>
    //         {
    //             values.map((value, i) => {
    //                 console.log(value)
    //             })
    //         }
    //         {/* <li className="element__list">Programador</li>
    //         <li className="element__list">Diseñador</li>
    //         <li className="element__list">Diseñador de Niveles</li>
    //         <li className="element__list">Editor</li> */}
    //     </>
    // );
    return <div>
        {
            values.map((value, i) => {
                (
                    <div>

                        <h1 key={i}>{console.log("asd")}</h1>
                    </div>
                )
            })
        }
    </div>
}
