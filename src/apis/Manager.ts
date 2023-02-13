import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/manager`
const OPTIONS = { withCredentials: true }

export const users = () => axios.get(`${BASEURL}/users`, OPTIONS)
export const setGroups = (arg: {
    id: string,
    groups: UserGroup[]
}) => axios.post(`${BASEURL}/user/group`, arg)
