<template>
    <div
        :class="$style.container"
        :style="{
            color: color
        }"
    >
        <h1>{{ status }}</h1>
        <h3>{{ diff }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { latest } from '@/apis/RabbitStatus'
import { computed, onUnmounted, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-tw'

dayjs.extend(relativeTime)
dayjs.locale('zh-tw')

const status = ref<number | null>(null)
const createAt = ref<string | null>(null)
const diff = ref<string>('')
const color = computed(() => {
    if (!status.value) return '#bbbbbb'
    if (status.value < 10) {
        return '#ad0000'
    } else if (status.value < 25) {
        return '#b94e4e'
    } else if (status.value < 45) {
        return '#db871f'
    } else if (status.value < 60) {
        return '#dba326'
    } else if (status.value < 70) {
        return '#69c5c1'
    } else if (status.value < 85) {
        return '#748bdd'
    }
    return '#26d36b'
})
const update = async () => {
    try {
        const { data } = (await latest()).data
        status.value = data.status
        createAt.value = data.createAt
        diff.value = dayjs(createAt.value).fromNow()
    } catch (e) {
        alert('無法取得兔子最新狀態QQ')
    }
}

let timerID: number | null = null
onMounted(async () => {
    await update()
    timerID = setInterval(update, 60 * 1000)
})
onUnmounted(() => {
    if (timerID) clearInterval(timerID)
})
</script>

<style lang="scss" module>
body {
    overflow: hidden;
}
.container {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, h3 {
        margin: 0;
        margin-bottom: 2vh;
    }

    h1 {
        font-size: 25vmin;
    }

    h3 {
        font-size: 5vmin;
    }
}
</style>
