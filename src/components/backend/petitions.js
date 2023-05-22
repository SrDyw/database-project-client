import { preferences } from "../config/preferences.config";

export const createProgrammer = async({name, feature, grade, lenguage}) => {
    
    const lenguage_arr = lenguage.replace(/\s+/g, '').split(',');
    console.log(lenguage_arr);

    const data = {
        name,
        feature,
        grade,
        lenguage_arr
    }
    const url = `${preferences.server.url}/cprogrammer`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(e => console.log(e));
};

export const createDesigner = async({name, feature, skills}) => {
    const skills_arr = skills.replace(/\s+/g, '').split(',');

    const data = {
        name,
        feature,
        skills_arr
    }
    const url = `${preferences.server.url}/cdesigner`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(e => console.log(e));
};


export const createEditor = async({name, feature, budget, website}) => {
    const data = {
        name,
        feature,
        budget,
        website
    }
    const url = `${preferences.server.url}/ceditor`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(e => console.log(e));
}

export const createLevelDesigner = async({name, feature, speciality}) => {
    const data = {
        name,
        feature,
        speciality,
    }
    const url = `${preferences.server.url}/cleveldesigner`;
    let result = {};

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => result = data)
        .catch(e => console.log(e));
}

export const reportOperation = operation => {
    const { message } = operation;
    
    if (message === 'succesfuly') {
        alert('Insertado Correctamente');
    }
    else {
        alert('Error al insertar')
    }
}