import CountryInformation from './CountryInformation'
import ListOfCountry from './ListOfCountry'

const Information = ({ countries }) => {
  const length = countries.length

  if (length == 0) {
    return <></>
  } else if (length == 1) {
    return <CountryInformation country={countries[0]} />
  } else if (length <= 10) {
    return <ListOfCountry countries={countries} />
  } else {
    return <p>Too many matches, specify another filter</p>
  }
}

export default Information
