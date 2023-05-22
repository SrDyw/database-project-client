import { preferences } from "../config/preferences.config";

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

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .catch((e) => 'error');
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
        .then((response) => "succesfuly")
        .catch((e) => "error");
};

// ** CREATE ==================================
//#endregion READ

export const reportOperation = (operation) => {
    const { message } = operation;

    if (message === "succesfuly") {
        alert("Insertado Correctamente");
    } else {
        alert("Error al insertar");
    }
    return message;
};
