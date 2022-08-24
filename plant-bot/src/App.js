import React from "react"
import PottedPlant from "./assets/PottedPlantSVG"

import "./../src/index.css"

function App() {
  return (
    <div className="main">
      <br />
      <br />
      <div className="title">
        <h1>plant.bot</h1>
        <PottedPlant />
      </div>
      <div>
      <model-viewer
          alt="bad"
          src="./assets/models/cactus_new.gltf"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y" />
      </div>
    </div>
  )
}

export default App
