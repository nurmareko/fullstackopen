import { useState } from 'react'
import Information from './components/Information'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])




  return (
    <>
      <Filter />
      <Information countries={countries} />
    </>
  )
};

export default App
