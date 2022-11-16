"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const react_1 = __importDefault(require("react"));
const CurrentStats = ({ date, humidity, temp, moisture, light, weight }) => {
    return (<>
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
    </>);
};
exports.default = CurrentStats;
