const PersonsForm = ({ onSubmit, value, onChangeName, onChangeNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={value.name} onChange={onChangeName} />
      </div>
      <div>
        number: <input value={value.number} onChange={onChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonsForm
