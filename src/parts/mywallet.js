import axios from "axios";

const URL = "http://localhost:5000/";

function postCreat(obj){
    const promise = axios.post(`${URL}creatCont`,obj);
    return promise;
}

function postLogin(obj){
    const promise = axios.post(`${URL}sign-in`,obj);
    return promise;
}

function postExtract(obj, header){
    const promis = axios.post(`${URL}Extract`, obj, header);
    return promis;
}

function getToday(header){
    const promise = axios.get(`${URL}Extract`, header);
    return promise;    
}


function getMyextracts(header){
    const promise = axios.get(`${URL}MyExtract`, header);
    return promise;    

}



export { getMyextracts, getToday, postExtract, postLogin, postCreat };