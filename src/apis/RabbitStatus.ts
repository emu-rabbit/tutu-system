import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/rabbit_status`

export const latest = () => axios.get(`${BASEURL}/latest`)
export const create = (status: number, message: string) => axios.post(`${BASEURL}/create`, { status, message }, { withCredentials: true })
export const recently = (inMillionSecond?: number) => axios.get(`${BASEURL}/recently`, { params: { inMillionSecond }, withCredentials: true })
export const replies = (recordID: string, publicOnly = true) => axios.get(`${BASEURL}/replies`, { params: { recordID, publicOnly }, withCredentials: true })
