import React, { useState, useEffect } from "react"
import { FlexboxGrid, Col } from "rsuite"
import { Panel } from "rsuite"
import CountUp from "react-countup"
import cx from "classnames"
import styles from "./Cards.module.css"

const Cards = (props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = props

  if (!confirmed) return "Loading..."

  return (
    <div className={styles.container}>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item
          componentClass={Col}
          colspan={24}
          md={6}
          className={styles.item}
        >
          <Panel shaded bordered className={cx(styles.card, styles.infected)}>
            <h4 style={{ color: "rgba(0, 0, 0, 0.54)", margin: "10px 0px" }}>
              Infected
            </h4>
            <h4 style={{ margin: "10px 0px" }}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </h4>
            <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
              {new Date(lastUpdate).toDateString()}
            </p>
            <p>Number of active cases of COVID-19</p>
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
          <Panel shaded bordered className={cx(styles.card, styles.recovered)}>
            <h4 style={{ color: "rgba(0, 0, 0, 0.54)", margin: "10px 0px" }}>
              Recovered
            </h4>
            <h4 style={{ margin: "10px 0px" }}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </h4>{" "}
            <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
              {" "}
              {new Date(lastUpdate).toDateString()}
            </p>
            <p>Number of recovered cases of COVID-19</p>
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
          <Panel shaded bordered className={cx(styles.card, styles.deaths)}>
            <h4 style={{ color: "rgba(0, 0, 0, 0.54)", margin: "10px 0px" }}>
              Deaths
            </h4>
            <h4 style={{ margin: "10px 0px" }}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </h4>{" "}
            <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
              {" "}
              {new Date(lastUpdate).toDateString()}
            </p>
            <p>Number of deaths cases of COVID-19</p>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  )
}

export default Cards
