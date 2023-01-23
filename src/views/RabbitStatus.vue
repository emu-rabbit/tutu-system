<template>
    <div
        class="centralize-container max-vh"
        :class="$style.container"
        :style="{
            color: color
        }"
    >
        <h1>{{ status }}</h1>
        <h6>{{ message || '-' }}</h6>
        <hr />
        <h3>{{ diff }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { latest } from '@/apis/RabbitStatus'
import { computed, onUnmounted, onMounted, ref } from 'vue'
import { showPrimaryNotify } from '@/utils/notify'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-tw'

dayjs.extend(relativeTime)
dayjs.locale('zh-tw')

const status = ref<number | null>(null)
const createAt = ref<string | null>(null)
const message = ref<string | null>(null)
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
        message.value = data.message
        diff.value = dayjs(createAt.value).fromNow()
    } catch (e) {
        showPrimaryNotify('無法取得兔子最新狀態QQ')
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
.container {
    h1, h6, h3 {
        margin: 0;
    }

    h1 {
        font-size: 25vmin !important;
        line-height: 1;
    }

    h6 {
        font-size: 4vmin !important;
    }

    hr {
        margin: 1vh;
        width: 60%;
        opacity: 0.7;
        border: none;
        border-bottom: 1px solid;
    }

    h3 {
        font-size: 5vmin !important;
    }
}
</style>
