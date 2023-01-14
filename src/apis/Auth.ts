import axios from 'axios'
import { RegistrationResponseJSON } from '@simplewebauthn/typescript-types'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/auth`

export const generateRegisterOptions = (arg: { email: string, username: string }) => axios.post(`${BASEURL}/register/option`, arg, { withCredentials: true })
export const verifyRegister = (arg: RegistrationResponseJSON) => axios.post(`${BASEURL}/register/verify`, arg, { withCredentials: true })
