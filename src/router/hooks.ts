import router from './index'
import nprogress from 'nprogress'
import useStore from '@/store'
import { info } from '@/apis/Auth'
import { hasGroup } from '@/utils/auth'
import { showNotify } from 'vant'

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
        if (to.meta.permission) {
            if (hasGroup(store.user.userGroup, to.meta.permission)) {
                next()
                return
            } else {
                showNotify({
                    message: '沒有權限',
                    type: 'primary'
                })
                next(false)
                return
            }
        }
    } catch (e) {
        console.log('Info api failed')
        store.user = null
    }
    next()
})

router.afterEach(() => nprogress.done())
