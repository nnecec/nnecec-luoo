import { get } from '../utils/axios'

export const fetchVolList = (params) => get('/vol/list', params)
export const fetchVolDetail = (params) => get('/vol/detail', params)