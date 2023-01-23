import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/backpack`
const OPTIONS = { withCredentials: true }

export const items = () => axios.get(`${BASEURL}`, OPTIONS)
