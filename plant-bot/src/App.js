/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import PottedPlant from "./assets/img/PottedPlantSVG"
import CurrentStats from "./assets/components/CurrentStats"
import Monstera from "./assets/components/MonsteraPlant"
import plantSensorServce from './services/plantdata'

import "./../src/index.css"

function App() {
  const [date, setDate] = useState("")
  const [humidity, setHumidity] = useState(0.0)
  const [temp, setTemp] = useState(0.0)
  const [moisture, setMoisture] = useState(0.0)
  const [light, setLight] = useState(0.0)
  const [weight, setWeight] = useState(0.0)

  useEffect(() => {
    plantSensorServce
      .getAll()
      .then((data) => {
        setDate(data.date)
        setHumidity(data.sensors.humidity)
        setTemp(data.sensors.temp)
        setMoisture(data.sensors.moisture)
        setLight(data.sensors.light)
        setWeight(data.sensors.weight)
      })
      .catch((err) => {
        console.log(err)
        setDate(err.message)
      })
  }, [])

  return (
    <div className="main">
      <h1>plant.bot</h1>
      <div id="stats-model">
        <CurrentStats
          date={date}
          humidity={humidity}
          temp={temp}
          moisture={moisture}
          light={light}
          weight={weight}
        />
        <div id="temp-block">
          <Monstera />
        </div>
      </div>
      <div id="graph-container" className="info-container">
        <h2>Last 4 hours</h2>
        <div id="temp-graph" />
      </div>
      <div id="footer">
        <a href="https://github.com/plant-bot">view source code</a>
        <PottedPlant className="icon"/>
      </div>
    </div>
  )
}

export default App
