import axios from 'axios'
const baseURL = 'http://127.0.0.1:9000'

const request = axios.create({
  baseURL,
  timeout: 10000,
})

const errorHandler = (error) => {
  if (error.response) {
    console.log('err', error)
  }
  return Promise.reject(error)
}

request.interceptors.request.use((config) => {
  // Some basic req configs
  return config
}, errorHandler)

/* response */
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request
