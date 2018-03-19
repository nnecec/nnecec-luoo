import axios from 'axios'
import config from '../../config'

console.log(config)


export function get(url, params) {
  return axios.get(`${config.api}${url}`, params)
}