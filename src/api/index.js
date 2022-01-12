import axios from 'axios'
import { useState, useEffect, React } from 'react'

const url ="https://covid19.mathdro.id/api"
export const useFetchData = (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
        async function getData() {
            try{
                const respone = await axios.get(changeableUrl);
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

export const fetchDailyData = async () =>{
    try{
        const {data} =await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        
        return modifiedData;
    } catch (error){

    }
}

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };

