import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(respone => respone.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const erase = (object) => {
  const request = axios.delete(`${baseUrl}/${object.id}`)
  return request.then(response => response.data)
}

const replace = (object) => {
  const request = axios.put(`${baseUrl}/${object.id}`, object)
  return request.then(response => response.data)
}

export default { getAll, create, erase, replace }
