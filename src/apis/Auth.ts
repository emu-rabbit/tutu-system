import axios from 'axios'
import { RegistrationResponseJSON, AuthenticationResponseJSON } from '@simplewebauthn/typescript-types'

const BASEURL = `${process.env.VUE_APP_API_DOMAIN || ''}/auth`
const OPTIONS = { withCredentials: true }

export const generateRegisterOptions = (arg: { email: string, username: string, }) => axios.post(`${BASEURL}/register/option`, { ...arg, rp_id: process.env.VUE_APP_RP_ID }, OPTIONS)
export const verifyRegister = (arg: { attResp: RegistrationResponseJSON, email: string, username: string, challenge: string }) => axios.post(`${BASEURL}/register/verify`, arg, OPTIONS)

export const generateAuthenticationOptions = (arg: { email: string }) => axios.post(`${BASEURL}/authentication/option`, { ...arg, rp_id: process.env.VUE_APP_RP_ID }, OPTIONS)
export const verifyAuthentication = (arg: { asstResp: AuthenticationResponseJSON, email: string, challenge: string }) => axios.post(`${BASEURL}/authentication/verify`, arg, OPTIONS)

export const info = () => axios.get(`${BASEURL}/info`, OPTIONS)
