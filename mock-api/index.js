const controls = {
  numMonthsToGenerate: 2,
  date: new Date('August 19, 1975 23:15:30'),
  tempRange: {
    min: 45,
    max: 62,
    format: "F",
  },
  humidRange: {
    min: 25,
    max: 45,
    format: "",
  },
  lightRange: {
    min: 807,
    max: 1614,
    format: "lux",
  },
  moistureRange: {},
  weightRange: {},
}

const generateData = () => {
  const data = { sensors: [] }

  for (let i = 0; i < 30 * controls.numMonthsToGenerate; i++) {
    controls.date.setDate(i)

    let tempObject = {
      temp: i,
      light: 0,
      humidity: 0,
      moisture: 0,
      weight: 0,
      date: controls.date,
    }

    console.log(tempObject)
    data.sensors.push(tempObject)
  }
  return data
}

module.exports = generateData
