import { showNotify } from 'vant'

export function showPrimaryNotify (message: string): void {
    showNotify({
        message,
        type: 'primary'
    })
}
