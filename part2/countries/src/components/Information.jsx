import CountryInformation from './CountryInformation'
import ListOfCountry from './ListOfCountry'

const Information = ({ countries, countryFilter }) => {
  if (countryFilter === "") {
    return <></>
  } else {
    const coutriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
    const length = coutriesToShow.length
    console.log(length)

    if (length == 0) {
      return <></>
    } else if (length == 1) {
      console.log(coutriesToShow[0])
      return <CountryInformation country={coutriesToShow[0]} />
    } else if (length <= 10) {
      return <ListOfCountry countries={coutriesToShow} />
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }


}

export default Information
