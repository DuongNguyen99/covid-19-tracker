import React from "react"
import { FlexboxGrid } from "rsuite"

import Card from "./Card/Card"
import styles from "./Cards.module.css"

const Cards = (props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = props

  if (!confirmed) return "Loading..."

  return (
    <div className={styles.container}>
      <FlexboxGrid justify="space-between">
        <Card
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        ></Card>
        <Card
          className={styles.recovered}
          cardTitle="Infected"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recovered cases from COVID-19."
        ></Card>
        <Card
          className={styles.deaths}
          cardTitle="Infected"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths cases from COVID-19."
        ></Card>
      </FlexboxGrid>
    </div>
  )
}
export default Cards
