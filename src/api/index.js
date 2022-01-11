import axios from 'axios'
import { useState, useEffect, React } from 'react'

const url ="https://covid19.mathdro.id/api"
export const useFetchData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function getData() {
            try{
                const respone = await axios.get(url);
                setData(respone.data);
                setLoading(false);
                
            } catch (error) {
                setError(error);
                setLoading(false);     
            }
        }
        getData();
    }, [])
    return [data, error, loading];
}

export const fetchDailyData =async () =>{
    try{
        const {data} =await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        console.log(modifiedData)
        return modifiedData;
    } catch (error){

    }
}

