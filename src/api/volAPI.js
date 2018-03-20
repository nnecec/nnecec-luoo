import { get } from '../utils/axios'

export const fetchVolList = (params) => get('/vol/list', params)