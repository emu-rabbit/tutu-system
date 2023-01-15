import { defineStore } from 'pinia'

const getDefaultState = () => ({
    user: null as {
        email: string,
        username: string,
        userGroup: string[]
    } | null
})

export default defineStore('main', {
    state: getDefaultState
})
