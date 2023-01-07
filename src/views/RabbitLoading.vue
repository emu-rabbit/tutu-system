<template>
    <div :class="$style.container">
        <div>
            <PaddedText :class="$style.message" :disable="paddingDisable || finished">
                {{ message }}
                <button v-if="state === 'request-waked'" @click="wakeResolver">叫醒這隻兔子</button>
            </PaddedText>
            <ProgressBar
                v-if="!slept && state !== 'post'"
                :class="$style.bar"
                :progress="progress"
                :color="progressColor"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PaddedText from '@/components/PaddedText.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import useState from '@/compositions/useState'
import { wait } from '@/utils/timer'
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

type State = 'init' | 'loading' | 'still-working' | 'sleeping' | 'request-waked' | 'waked' | 'retrying' | 'done' | 'post'
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
}, {
    progress: 60,
    message: '兔子伸伸懶腰',
    state: 'waked'
}, {
    progress: 80,
    message: '兔子繼續努力中',
    state: 'retrying'
}, {
    progress: 100,
    message: '兔子搬完東西了！',
    state: 'done'
}, {
    progress: 100,
    message: '其實.....根本沒有東西要搬 (( 惡魔兔燦笑',
    state: 'post'
}])
const router = useRouter()

const slept = computed(() => state.value === 'sleeping' || state.value === 'request-waked')
const finished = computed(() => state.value === 'done' || state.value === 'post')
const paddingDisable = computed(() => slept.value)
const progressColor = computed(() => slept.value ? '#88888844' : '')

const ms = 5000
let wakeResolver: (value?: unknown) => void

onMounted(async () => {
    await wait(ms)
    state.value = 'loading'
    await wait(ms)
    state.value = 'still-working'
    await wait(ms)
    state.value = 'sleeping'
    await wait(ms)
    state.value = 'request-waked'
    await new Promise(resolve => { wakeResolver = resolve })
    state.value = 'waked'
    await wait(ms)
    state.value = 'retrying'
    await wait(ms)
    state.value = 'done'
    await wait(ms)
    state.value = 'post'
    await wait(ms)
    router.push('/home')
})
</script>

<style lang="scss" module>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .message {
        color: #ff7777;
        font-weight: bolder;
    }

    .bar {
        width: 60vw;
    }
}
</style>
