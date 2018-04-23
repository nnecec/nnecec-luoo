import { get, post } from 'utils/axios'

export const syncVolList = (params = {}) => post('/sync/vol', params)
export const syncTagList = (params = {}) => post('/sync/tag', params)