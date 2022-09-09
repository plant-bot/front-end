/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

const CurrentStats = ({ humidity }) => {

  return <>
    <table>
      <thead>
        <tr>
          <th colSpan={2}><h2>Current Stats</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Humidity</td>
          <td>{humidity}</td>
        </tr>
      </tbody>
    </table>
  </>
}

export default CurrentStats
