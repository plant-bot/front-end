/* eslint-disable no-unused-vars */
import React from "react"
import PottedPlant from "./assets/img/PottedPlantSVG"
import CurrentStats from "./assets/components/CurrentStats"
import Taro from "./assets/components/MonsteraPlant"

import "./../src/index.css"

function App() {
  return (
    <div className="main">
      <h1>plant.bot</h1>
      <div id="stats-model">
        <CurrentStats
          humidity={"73% - 80%"}
          temp={"69 - 72 F"}
          moisture={"avg 60%"}
          light={"avg 1237 lux"}
          weight={"12 lb"}
        />
        <div id="temp-block">
          <Taro />
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
