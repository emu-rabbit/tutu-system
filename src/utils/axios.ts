import axios from 'axios'

axios.interceptors.request.use(config => {
    const TOKEN = localStorage.getItem('token')
    if (TOKEN) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (config.headers as any).Authorization = TOKEN
    }
    return config
})
