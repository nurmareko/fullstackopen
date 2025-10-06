import { useEffect, useState } from 'react'
import countryService from './services/country'
import Information from './components/Information'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState("")

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => setCountries(countries))
      .catch(error => console.log('what happened!!!!!!'))
  }, [])

  const handleCountryFilter = (event) => {
    setCountryFilter(event.target.value)
  }

  const showPerson = (name) => {
    setCountryFilter(name)
  }

  return (
    <>
      <Filter value={countryFilter} onChange={handleCountryFilter} />
      <Information countries={countries} countryFilter={countryFilter} showPerson={showPerson} />
    </>
  )
};

export default App
