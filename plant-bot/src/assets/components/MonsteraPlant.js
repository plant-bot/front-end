/* eslint-disable no-unused-vars */
import React from "react"

const MonsteraPlant = () => {
  const modelRef = React.useRef()

  return (
    <model-viewer
      className="model-viewer"
      src="./pottedMonstera.glb"
      alt="a plant"
      ar
      auto-rotate
      ref={(ref) => {
        modelRef.current = ref
      }}
    />
  )
}

export default MonsteraPlant