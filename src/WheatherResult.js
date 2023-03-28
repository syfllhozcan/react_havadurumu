import React from 'react'
import './wheather.css'

function WheatherResult({data,mintemp,maxtemp,consition,icon}) {
  return (
    <div className="result">
        <h3>{data}</h3>
        <ul>
            <li><img src={icon} alt="" /></li>
            <li>{consition}</li>
            <li>{maxtemp} C  /  {mintemp} C</li>
        </ul>
    </div>
  )
}

export default WheatherResult
