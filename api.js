const axios = require('axios')
const baseURL = 'https://como-fazer-fsantos91.firebaseio.com/'
const auth = 'cyA8OlIWGjZxy6kCynq2ApmNJYVWLvQDe0muybvW'

const create = async(key, data) => {
  await axios.post(`${baseURL}${key}.json?auth=${auth}`, data)
  return true
}

const list = async(key) => {
  const content = await axios.get(`${baseURL}${key}.json?auth=${auth}`)
  if(content.data){
    const objetos = Object
                        .keys(content.data)
                        .map(key => {
                          return {
                            id: key,
                            ...content.data[key]
                          }
                        })
    return objetos
  }
  return []
}

const get = async(key, id) => {
  const content = await axios.get(`${baseURL}${key}/${id}.json?auth=${auth}`)
  return {
    id: id,
    ...content.data
  }
}

const update = async(key, id, data) => {
  await axios.put(`${baseURL}${key}/${id}.json?auth=${auth}`, data)
  return true
}

const del = async(key, id) => {
  await axios.delete(`${baseURL}${key}/${id}.json?auth=${auth}`)
  return true
}

module.exports = {list,del,get,update,create}