import router from './index'
import nprogress from 'nprogress'
import useStore from '@/store'
import { info } from '@/apis/Auth'

nprogress.configure({
    showSpinner: false
})

router.beforeEach(async (to, from, next) => {
    nprogress.start()
    const store = useStore()
    try {
        const { data } = await info()
        store.user = {
            email: data.email,
            username: data.username,
            userGroup: data.user_groups
        }
    } catch (e) {
        console.log('Info api failed')
        store.user = null
    }
    next()
})

router.afterEach(() => nprogress.done())
