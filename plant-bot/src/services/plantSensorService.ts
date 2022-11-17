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

const getAll = (): SensorsData[] => {
  const fetchFromPlant = async (): Promise<unknown[]> => {
    const res = await axios.get(BASE_URL)
    return res.data
  }

  try {
    const resData = fetchFromPlant().then((val): SensorsData[] => {
      val.forEach((elem) => {
        if (isSensorData(elem)) {
          return elem
        } else {
          throw new Error(`broken sensor data object: ${JSON.stringify(elem)}`)
        }
      })
      return val as SensorsData[]
    })
    console.log(resData);

    return resData as unknown as SensorsData[]
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error(`unidentified error: ${error}`)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
