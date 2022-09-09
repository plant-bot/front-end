/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

const CurrentStats = ({ humidity, temp, moisture, light, weight }) => {

  return <>
    <table className="info-container">
      <thead>
        <tr>
          <th colSpan={2}><h2>Current Stats</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="stat">Humidity</td>
          <td>{humidity}</td>
        </tr>
        <tr>
          <td className="stat">Temp</td>
          <td>{temp}</td>
        </tr>
        <tr>
          <td className="stat">Moisture</td>
          <td>{moisture}</td>
        </tr>
        <tr>
          <td className="stat">Light</td>
          <td>{light}</td>
        </tr>
        <tr>
          <td className="stat">Weight</td>
          <td>{weight}</td>
        </tr>
      </tbody>
    </table>
  </>
}

export default CurrentStats
