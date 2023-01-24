import axios from 'axios'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/backpack`
const OPTIONS = { withCredentials: true }

export const items = () => axios.get(`${BASEURL}`, OPTIONS)
export const count = (userID: string, itemID: string) => axios.get(`${BASEURL}/count`, { params: { userID, itemID }, ...OPTIONS })
export const set = (userID: string, itemID: string, count: number) => axios.post(`${BASEURL}/set`, { user_id: userID, item_id: itemID, count }, OPTIONS)
