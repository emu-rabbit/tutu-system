import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/rabbit_status`

export const latest = () => axios.get(`${BASEURL}/latest`)
export const create = (status: number, message: string) => axios.post(`${BASEURL}/create`, { status, message }, { withCredentials: true })
