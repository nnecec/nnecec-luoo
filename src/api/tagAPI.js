import { get } from '../utils/axios'

export const fetchTagList = () => get('/tag/list')
