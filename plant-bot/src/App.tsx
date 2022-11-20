import React, { useEffect, useState } from "react"
import PottedPlant from "./assets/img/PottedPlantSVG"
import CurrentStats from "./components/CurrentStats"
import Monstera from "./components/MonsteraPlant"
import plantSensorServce from "./services/plantSensorService"

import "./../src/index.css"

function App() {
  const [date, setDate] = useState("")
  const [humidity, setHumidity] = useState(0.0)
  const [temp, setTemp] = useState(0.0)
  const [moisture, setMoisture] = useState(0.0)
  const [light, setLight] = useState(0.0)
  const [weight, setWeight] = useState(0.0)

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const data = await plantSensorServce.getAll()
      const recent = data.at(-1)

      if (recent) {
        setDate(recent.date)
        setHumidity(recent.humidity)
        setTemp(recent.temp)
        setMoisture(recent.moisture)
        setLight(recent.light)
        setWeight(recent.weight)
      }
      
    }
    fetchData()
  }, [])

  return (
    <div className="main">
      <h1>plant.bot</h1>
      <div id="stats-model">
        <CurrentStats date={date} humidity={humidity} temp={temp} moisture={moisture} light={light} weight={weight} />
        <div id="temp-block">
          <Monstera />
        </div>
      </div>
      <div id="graph-container" className="info-container">
        <h2>Data</h2>
        <div id="temp-graph" />
      </div>
      <div id="footer">
        <a href="https://github.com/plant-bot">view source code</a>
        <PottedPlant />
      </div>
    </div>
  )
}

export default App
