<template>
    <div :class="$style.container">
        <div>
            <PaddedText :disable="state === 'sleeping'">
                {{ message }}
                <button v-if="state === 'request-waked'" @click="wakeResolver">叫醒這隻兔子</button>
            </PaddedText>
            <ProgressBar
                :class="$style.bar"
                :progress="progress"
                :color="state === 'sleeping' ? '#88888844' : ''"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PaddedText from '@/components/PaddedText.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import useState from '@/compositions/useState'
import { wait } from '@/utils/timer'
import { onMounted } from 'vue'

type State = 'init' | 'loading' | 'still-working' | 'sleeping' | 'request-waked'

const { progress, message, state } = useState<State>([{
    progress: 0,
    message: '兔子收到了主人的呼喚',
    state: 'init'
}, {
    progress: 30,
    message: '兔子努力搬運資料中',
    state: 'loading'
}, {
    progress: 60,
    message: '兔子依舊在努力搬運中',
    state: 'still-working'
}, {
    progress: 60,
    message: '阿，兔子睡著了Zzzzzzz',
    state: 'sleeping'
}])
let wakeResolver: (value?: unknown) => void

onMounted(async () => {
    await wait(3000)
    state.value = 'loading'
    await wait(4000)
    state.value = 'still-working'
    await wait(4000)
    state.value = 'sleeping'
    await wait(3000)
    state.value = 'request-waked'
    await new Promise(resolve => { wakeResolver = resolve })
})
</script>

<style lang="scss" module>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .bar {
        width: 60vw;
    }
}
</style>
