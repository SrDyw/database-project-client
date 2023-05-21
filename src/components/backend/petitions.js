import { preferences } from "../config/preferences.config";

export const createProgrammer = ({name, feature, grade, lenguage}) => {
    
    const lenguage_arr = lenguage.replace(/\s+/g, '').split(',');
    console.log(lenguage_arr);

    const data = {
        name,
        feature,
        grade,
        lenguage_arr
    }
    const url = `${preferences.server.url}/cprogrammer`;
    fetch(url, {
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

export const createDesigner = ({name, feature, skills}) => {
    const skills_arr = skills.replace(/\s+/g, '').split(',');

    const data = {
        name,
        feature,
        skills_arr
    }
    const url = `${preferences.server.url}/cdesigner`;
    fetch(url, {
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


export const createEditor = ({name, feature, budget, website}) => {

}