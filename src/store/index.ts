import { defineStore } from 'pinia'

const getDefaultState = () => ({
    user: null as User | null
})

export default defineStore('main', {
    state: getDefaultState
})
