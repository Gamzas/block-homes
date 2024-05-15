import axios from 'axios'
import { API_BASE } from '@constants/api'

axios.defaults.withCredentials = false

export const publicRequest = axios.create({
  baseURL: API_BASE,
})
