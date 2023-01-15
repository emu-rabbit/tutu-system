import router from './index'
import nprogress from 'nprogress'

nprogress.configure({
    showSpinner: false
})

router.beforeEach(async (to, from, next) => {
    nprogress.start()
    next()
})

router.afterEach(() => nprogress.done())
