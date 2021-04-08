import React, { Component } from "react"
import styles from "./App.module.css"

import { Cards, Chart, CountryPicker } from "./components"

class App extends Component {
  state = {}
  render() {
    return (
      <>
        <Cards />
        <Chart />
        <CountryPicker />
      </>
    )
  }
}

export default App
