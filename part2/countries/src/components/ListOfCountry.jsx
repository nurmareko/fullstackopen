const ListOfCountry = ({ countries, showPerson }) => {
  const names = countries.map(country => country.name.common)
  return (
    <>
      {names.map(name => <p key={name}>{name} <button onClick={() => showPerson(name)}>Show</button></p>)}
    </>
  )
}

export default ListOfCountry
