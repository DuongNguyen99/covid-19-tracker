import React from "react"
import { FlexboxGrid, Col } from "rsuite"
import { Panel } from "rsuite"
import CountUp from "react-countup"
import cx from "classnames"
import styles from "./Card.module.css"

const Card = (props) => {
  const { className, cardTitle, value, lastUpdate, cardSubtitle } = props

  return (
    <>
      <FlexboxGrid.Item
        componentClass={Col}
        colspan={24}
        md={7}
        className={styles.item}
      >
        <Panel shaded bordered className={cx(styles.card, className)}>
          <h4 style={{ color: "rgba(0, 0, 0, 0.54)", margin: "10px 0px" }}>
            {cardTitle}
          </h4>
          <h4 style={{ margin: "10px 0px" }}>
            <CountUp start={0} end={value} duration={2} separator="," />
          </h4>
          <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            {new Date(lastUpdate).toDateString()}
          </p>
          <p>{cardSubtitle}</p>
        </Panel>
      </FlexboxGrid.Item>
    </>
  )
}

export default Card
