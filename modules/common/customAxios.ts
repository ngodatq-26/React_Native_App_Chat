import axios from 'axios';
import React from 'react';


export const fetchAPI = async (url :any,method : any,data? : any) =>{
    const headers = {
        'Content-Type': 'aplication/json',
        "Access-Control-Allow-Origin": "*",
    };
    if(method === "POST") {
        return await axios.post(url,data).then((data) =>{
            return data;
        })
    }
    if(method === "GET") {
        return await axios.post(url,data).then((data) =>{
            return data;
        })
    }
}
