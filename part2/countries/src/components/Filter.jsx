const Filter = ({ value, onChange }) => {
  return (
    <>
      find countries <input onChange={onChange} value={value} />
    </>
  )
}

export default Filter
