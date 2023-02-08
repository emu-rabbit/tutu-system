import router from './index'
import nprogress from 'nprogress'
import useStore from '@/store'
import { info } from '@/apis/Auth'
import { hasGroup } from '@/utils/auth'
import { showPrimaryNotify } from '@/utils/notify'

nprogress.configure({
    showSpinner: false
})

router.beforeEach(async (to, from, next) => {
    nprogress.start()
    const store = useStore()
    try {
        const { data } = await info()
        store.user = data
            ? {
                id: data.id,
                email: data.email,
                username: data.username,
                userGroup: data.userGroups
            }
            : null
    } catch (e) {
        console.log('Info api failed')
        if (
            hasResponse(e) &&
            hasStatus(e.response) &&
            e.response.status === 401
        ) {
            localStorage.removeItem('token')
        }
        store.user = null
    }

    if (to.meta.permission) {
        if (hasGroup(store.user?.userGroup || [], to.meta.permission)) {
            next()
        } else {
            showPrimaryNotify('沒有權限')
            next(false)
        }
        return
    }
    next()
})

router.afterEach(() => nprogress.done())

const hasResponse = (value: unknown): value is { response: unknown } => {
    return typeof value === 'object' &&
        value !== null &&
        'response' in value
}

const hasStatus = (value: unknown): value is { status: unknown } => {
    return typeof value === 'object' &&
        value !== null &&
        'status' in value
}
