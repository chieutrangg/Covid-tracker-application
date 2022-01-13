import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {useDailyData, useFetchData, fetchCountries} from './api'
import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';


function App() {
  const [country, setCountry] = useState('');
  const [data, error, loading] = useFetchData(country);
  
  const handleCountryChange = (country) => {
    setCountry(country)
  }
  // render() {
  //   const {data, country} = 
  // }

  return (
    <div className={styles.container}>
       <img className={styles.image} src='./image/image.png' alt="COVID-19" />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
