import axios from "axios"
import { SensorsData } from "../types"

const BASE_URL = "/sensors"

const isSensorData = (param: any): param is SensorsData => {
  return (
    "date" in param &&
    "humidity" in param &&
    "light" in param &&
    "moisture" in param &&
    "temp" in param &&
    "weight" in param
  )
}

const getAll = async (): Promise<SensorsData[]> => {
  const fetchFromPlant = async (): Promise<SensorsData[]> => {
    const res = await axios.get(BASE_URL)
    res.data.forEach((elem) => {
      if (!isSensorData(elem)) {
        return Promise.reject(`malformmated sensor data: ${elem}`)
      }
    })
    return res.data
  }

  try {
    return fetchFromPlant()
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error(`unidentified error: ${error}`)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
