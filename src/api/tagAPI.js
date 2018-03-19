import { get } from '../utils/axios'



export const fetchTagList = (params) => get('/tag/list', params)