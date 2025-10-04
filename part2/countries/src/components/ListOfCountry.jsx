const ListOfCountry = ({ countries }) => {
  console.log(countries)
  const names = countries.map(country => country.name.common)
  console.log(names)
  return (
    <>
      {names.map(name => <p>{name}</p>)}
    </>
  )
}

export default ListOfCountry
