import React, { Component } from "react"
import "rsuite/dist/styles/rsuite-default.css"
import styles from "./App.module.css"

import { Cards, Chart, CountryPicker } from "./components"
import { fetchData } from "./api/api"

class App extends Component {
  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })
    console.log(this.state.data)
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker onChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
