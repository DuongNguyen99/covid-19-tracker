import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
  let changeableUrl = url

  if (country) changeableUrl = `${url}/countries/${country}`
  try {
    const response = await axios.get(changeableUrl)
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = response // Object destructuring
    const modifiedData = { confirmed, recovered, deaths, lastUpdate }

    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`)
    const { data } = response

    const filteredData = data.filter((data, index) =>
      index % 7 === 0 ? data : null
    )

    const modifiedData = filteredData.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))

    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`)
    const {
      data: { countries },
    } = response
    const modifiedData = countries.map((country) => country.name)

    return modifiedData
  } catch (error) {}
}
