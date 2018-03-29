import axios from 'axios'
import config from '../../config'

export function get(url, params) {
  return axios.get(`${config.api}${url}`, { params })
}