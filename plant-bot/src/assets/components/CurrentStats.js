/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

const CurrentStats = ({ date, humidity, temp, moisture, light, weight }) => {
  return (
    <>
      <table className="info-container">
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>Current Environment</h2> <br /> <p id="temp-date">{date}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="stat">Humidity</td>
            <td>
              {humidity * 100}
              {"%"}
            </td>
          </tr>
          <tr>
            <td className="stat">Temp</td>
            <td>{temp}&deg;C</td>
          </tr>
          <tr>
            <td className="stat">Moisture</td>
            <td>
              {moisture * 100}
              {"%"}
            </td>
          </tr>
          <tr>
            <td className="stat">Light</td>
            <td>{light} lux</td>
          </tr>
          <tr>
            <td className="stat">Weight</td>
            <td>{weight} lb</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CurrentStats
