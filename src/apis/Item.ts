import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/item`
const OPTIONS = { withCredentials: true }

export const list = () => axios.get(`${BASEURL}/list`, OPTIONS)
