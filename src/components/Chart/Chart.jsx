import React, { useEffect, useState } from "react"
import { Line, Bar } from "@iftek/react-chartjs-3"
import { fetchDailyData } from "../../api/api"
import styles from "./Chart.module.css"

const Chart = (props) => {
  const {
    data: { confirmed, recovered, deaths },
    country,
  } = props
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }

    fetchAPI()
  }, [])

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderWidth: 2,
            borderColor: "rgba(0, 0, 255, 0.4)",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderWidth: 2,
            borderColor: "rgba(255, 0, 0, 0.4)",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
    />
  ) : null

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  )
}

export default Chart
