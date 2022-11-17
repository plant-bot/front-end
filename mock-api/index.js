const controls = {
  numMonthsToGenerate: 2,
  startDate: {
    year: 2021,
    month: 10,
    day: 1,
  },
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
  moistureRange: {
    min: 10,
    max: 80,
    format:"% moisture"
  },
  weightRange: {
    min: 3,
    max: 12,
    format: "lbs"
  },
}

const getRandomRange = (min, max) => {
  return Math.random() * (max - min) + min
}

const generateData = () => {
  const data = { sensors: [] }
  const { startDate, numMonthsToGenerate, tempRange, humidRange, lightRange, moistureRange, weightRange } = controls

  const updateDate = (i) => {
    const { year, month, day } = startDate
    const temp = new Date(year, month, day)
    temp.setDate(i)
    return temp
  }

  for (let i = 0; i < 30 * numMonthsToGenerate; i++) {
    let tempObject = {
      temp: getRandomRange(tempRange.min, tempRange.max),
      light: getRandomRange(lightRange.min, lightRange.max),
      humidity: getRandomRange(humidRange.min, humidRange.max),
      moisture: getRandomRange(moistureRange.min, moistureRange.max),
      weight: getRandomRange(weightRange.min, weightRange.max),
      date: updateDate(i),
    }
    data.sensors.push(tempObject)
  }
  return data
}

module.exports = generateData
