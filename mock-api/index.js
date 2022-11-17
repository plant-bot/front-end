const controls = {
  numMonthsToGenerate: 2,
  tempRange: {
    min: 45,
    max: 62,
    format: "F"
  },
  humidRange: {
    min: 25,
    max: 45,
    format: ""
  },
  lightRangeMinMax: {
    min: 807,
    max: 1614,
    format: "lux"
  }
}

const toBreak = () => {
  const data = { sensors: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.sensors.push({ temp: i, humidity: i, light: i, date: new Date() })
  }
  return data
}

module.exports = toBreak
