import axios from "axios";


const URL = "http://localhost:5000/";


    // postLogin
    // getToday
    // postCreat


function postCreat(obj){
    const promise = axios.post(`${URL}creatCont`,obj);
    return promise;
}

function postLogin(obj){
    const promise = axios.post(`${URL}sign-in`,obj);
    return promise;
}

function getToday(header){
    const promise = axios.get(`${URL}Extract`, header);
    return promise;    
}

function postExtract(obj){
    const promis = axios.post(`${URL}Extract` , obj);
    return promis;
}

////////////////


function postLoginHeader(obj, header ){
    const promise = axios.post(`${URL}habits`,obj , header );
    return promise;
}

function getHeader(header){
    const promise = axios.get(`${URL}habits`,header);
    return promise;
}
function delHabts(id , header){
    const promise = axios.delete(`${URL}habits/${id}`, header);
    return promise;
}




function postUncheck(id,header){
    const promis = axios.post( `${URL}habits/${id}/uncheck`, {} , header );
    return promis;
}

function getHistori(header){
    const promis = axios.get( `${URL}habits/history/daily`, header );
    return promis;
}    



export { getHistori , postUncheck ,postExtract , postLogin ,postCreat , postLoginHeader, getHeader, delHabts, getToday };