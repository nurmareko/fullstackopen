const CountryInformation = ({ country }) => {
  const name = country.name.common
  const capital = country.capital[0]
  const areaCode = country.area
  const languages = country.languages
  const flagUrl = country.flags.png

  return (
    <>
      <h1>{name}</h1>
      <p>Capital {capital}</p>
      <p>Area {areaCode}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map((name, index) =>
          <li key={index}>{name}</li>
        )}
      </ul>
      <img alt="country flag" src={flagUrl} />
      <h2>Weather in {name}</h2>
      <p>Temperature -0.0 Celcius</p>
      <img alt="weather icon" src="" />
      <p>Wind 0.0 m/s</p>
    </>
  )
}

export default CountryInformation
