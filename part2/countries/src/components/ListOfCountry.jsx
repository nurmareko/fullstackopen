const ListOfCountry = ({ countries }) => {
  const names = countries.map(country => country.name.common)
  return (
    <>
      {names.map(name => <p>{name}</p>)}
    </>
  )
}

export default ListOfCountry
