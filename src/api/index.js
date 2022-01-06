import React from 'react'
import axios from 'axios'

const url ="https://covid19.mathdro.id/api"
export const fetchData = async () => {
    try{
        const respone = await axios.get(url);
        return respone;
        console.log(respone);
    } catch (error) {

    }
}



