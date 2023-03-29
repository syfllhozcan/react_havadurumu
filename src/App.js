import React, { useState } from 'react';
import Wheather from './WheatherResult';
import './App.css';

function App() {

  const APP_KEY = "5c8c0e7feac840f6b893422123230"
  let cityinput = ""
  const [weatherdata, setwheatherdata] = useState([])

  function cityText() {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityinput = e.target.value;
      console.log(cityinput)
    })
  }

  async function getData(value) {
    if(value === '') return ;
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`);
    const resut = await data.json();
    setwheatherdata(resut.forecast.forecastday);
    console.log(resut.forecast.forecastday);
  }

  return (
    <div>
      <div className="search">
        <input type="text" placeholder='search a ctiy...' onChange={cityText} />
        <button onClick={() => getData(cityinput)}>Search</button>
      </div>

      {weatherdata.map((item) =>
      (<Wheather key={item.date}FF
        data={item.date}
        mintemp={item.day.mintemp_c}
        maxtemp={item.day.maxtemp_c}
        condition={item.day.condition.text}
        icon={item.day.condition.icon} />)
      )}

    </div>
  );
}

export default App
