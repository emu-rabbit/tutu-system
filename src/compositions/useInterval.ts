import { onBeforeMount, onMounted } from 'vue'

export default function (callback: () => void, millisecond: number) {
    let id: number | null = null

    onMounted(() => {
        id = setInterval(callback, millisecond)
    })

    onBeforeMount(() => {
        if (id) clearInterval(id)
    })
}
