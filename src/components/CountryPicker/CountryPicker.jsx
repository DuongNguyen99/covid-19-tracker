import React, { useState, useEffect } from "react"
import { SelectPicker } from "rsuite"
import { countries, fetchCountries } from "../../api/api"
// import data from "../data"
import styles from "./CountryPicker.module.css"

const CountryPicker = (props) => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setFetchedCountries])

  const data = fetchedCountries.map((country) => ({
    label: country,
    value: country,
  }))

  return (
    <>
      <SelectPicker
        onChange={props.onChange}
        size="lg"
        placeholder="Global"
        className={styles.picker}
        block
        data={data}
      ></SelectPicker>
    </>
  )
}

export default CountryPicker
