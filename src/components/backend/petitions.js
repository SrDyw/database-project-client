import { preferences } from "../config/preferences.config";
import { Pool } from "pg";

//#region CREATE
// ** CREATE ==================================
export const createProgrammer = async ({ name, feature, grade, lenguage }) => {
    const lenguage_arr = lenguage.replace(/\s+/g, "").split(",");

    const data = {
        name,
        feature,
        grade,
        lenguage_arr,
    };
    const url = `${preferences.server.url}/cprogrammer`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => console.log(e));
};

export const createDesigner = async ({ name, feature, skills }) => {
    const skills_arr = skills.replace(/\s+/g, "").split(",");

    const data = {
        name,
        feature,
        skills_arr,
    };
    const url = `${preferences.server.url}/cdesigner`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => console.log(e));
};

export const createEditor = async ({ name, feature, budget, website }) => {
    const data = {
        name,
        feature,
        budget,
        website,
    };
    const url = `${preferences.server.url}/ceditor`;

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => console.log(e));
};

export const createLevelDesigner = async ({ name, feature, speciality }) => {
    const data = {
        name,
        feature,
        speciality,
    };
    const url = `${preferences.server.url}/cleveldesigner`;
    let result = {};

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => console.log(e));
};

export const create = async (data, entitie) => {
    const url = `${preferences.server.url}/c${entitie}`;

    console.log(data);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => "error");
};

export const createIndustry = async ({ name, feature }) => {
    const data = {
        name,
        feature,
    };
    const url = `${preferences.server.url}/cindustry`;
    let result = {};

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => "succesfuly")
        .catch((e) => "error");
};

// ** CREATE ==================================
//#endregion CREATE

//#region READ
// ** CREATE ==================================

export const select = async (table, id) => {
    const url = `${preferences.server.url}/${table}/${id === "" ? "all" : id}`;
    console.log(`Consulting ${table} at id ${id} in url ${url}`);

    return fetch(url)
        .then((response) => response.json())
        .catch((e) => "error");
};

export const deleteQuery = async (table, id) => {
    const url = `${preferences.server.url}/d${table}/${id === "" ? "all" : id}`;
    console.log(`Deleting int ${table} at id ${id} in url ${url}`);

    return fetch(url, {
        method: "post",
        "Content-Type": "application/json",
        body: JSON.stringify({}),
    })
        .then((response) => response.json())
        .catch((e) => "error");
};

// ** CREATE ==================================
//#endregion READ

export const update = async (table, data, id) => {
    const pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "players_portal",
        password: "pepe0102",
        port: 3000,
    });

    pool.connect()
        .then(() => console.log("Database connection established"))
        .catch((err) =>
            console.error("Error connecting to database\n", err.stack)
        );

    const url = `${preferences.server.url}/u${table}/${id}`;
    // console.log(JSON.stringify(data));

    await fetch(preferences.server.url + "/pool").then((response) =>
        console.log(response)
    );
    return;

    // try {
    //     const query = {
    //         text: `UPDATE developers SET name = $2, feature = $3 WHERE id = $1`,
    //         values: [id, data.name, data.feature],
    //     };

    //     const update_result = await pool.query(
    //         "UPDATE programmer SET grade = $1 WHERE id = $2",
    //         [data.grade, id]
    //     );
    //     if (update_result.rowCount > 0) await pool.query(query);
    //     console.log("Bien");
    // } catch(e) {
    //     console.log(e);
    // }

    return;

    return fetch(url, {
        method: "put",
        "Content-Type": "application/json",
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => "error");
};

export const reportOperation = (operation) => {
    const { message } = operation;

    if (message === "succesfuly") {
        alert("Insertado Correctamente");
    } else {
        alert("Error al insertar");
    }
    return message;
};
