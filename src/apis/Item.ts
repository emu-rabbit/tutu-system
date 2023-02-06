import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/item`
const OPTIONS = { withCredentials: true }

export const list = () => axios.get(`${BASEURL}/list`, OPTIONS)
export const edit = (arg: {
    id: string,
    name: string,
    description: string
}) => axios.post(`${BASEURL}/edit`, arg)
