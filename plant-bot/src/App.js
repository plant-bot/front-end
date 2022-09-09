/* eslint-disable no-unused-vars */
import React from "react"
import PottedPlant from "./assets/img/PottedPlantSVG"
import CurrentStats from "./assets/components/CurrentStats"

import "./../src/index.css"

function App() {
  return (
    <div className="main">
      <h1>plant.bot</h1>
      <div>
        <CurrentStats humidity={80} />
        <div id="temp-block" />
      </div>
    </div>
  )
}

export default App
