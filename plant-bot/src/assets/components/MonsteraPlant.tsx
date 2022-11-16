/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"

const MonsteraPlant = () => {
  const [isLoading, setIsLoading] = useState(true)

  const modelRef = React.useRef()
  useEffect(() => {
    modelRef.current.addEventListener("load", () => {
      setIsLoading(false)
    })
  }, [])

  const displayStyle = {
    "opacity": isLoading ? "0%" : "90%"
  }

  return (
    <model-viewer
      className="model-viewer"
      style={displayStyle}
      src="./pottedMonstera.glb"
      alt="a plant"
      ar
      camera-controls
      auto-rotate
      rotation-per-second="1deg"
      interaction-prompt="none4"
      ref={(ref) => {
        modelRef.current = ref
      }}
    />
  )
}

export default MonsteraPlant
