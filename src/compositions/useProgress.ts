import { ref } from 'vue'

/** Integer in 0 ~ 100 */
type ProgressRange = InRange<0, 100>

export default function () {
    const progress = ref<ProgressRange>(0)
    const message = ref('')

    const setProgressStatus = (arg: {
        progress: ProgressRange,
        message: string
    }) => {
        progress.value = arg.progress
        message.value = arg.message
    }

    return {
        progress,
        message,
        setProgressStatus
    }
}
