const axios = require('axios');

// External services for contracts

const ApiPoccContracts = axios.create({
  baseURL: 'https://api.cesarserver.com/api/v1'
})
const poccContractServices = {}

poccContractServices.createNewWaiter = (data) => {
  const dataToken = { 
    api_key: process.env.API_TOKEN
  }
  return ApiPoccContracts.post('/waiter', {...data, ...dataToken})
    .then(res => {
      // console.log(res.data)
      return res.data
    })
}

poccContractServices.getWaiter = (email) => {
  return ApiPoccContracts.get(`/waiter?api_key=${process.env.API_TOKEN}&email=${email}`)
    .then(res => {
      // console.log(res.data)
      return res.data
    })
}


module.exports = poccContractServices
