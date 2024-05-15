import axios from 'axios'
import { API_BASE } from '@constants/api'

axios.defaults.withCredentials = true

export const publicRequest = axios.create({
  baseURL: API_BASE,
})
