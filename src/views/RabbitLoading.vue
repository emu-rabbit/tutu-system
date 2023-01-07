<template>
    <div :class="$style.container">
        <div>
            <p>{{ message }}</p>
            <ProgressBar
                :class="$style.bar"
                :progress="progress"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProgressBar from '@/components/ProgressBar.vue'
import useState from '@/compositions/useState'
import { wait } from '@/utils/timer'
import { onMounted } from 'vue'

type State = 'init' | 'loading'

const { progress, message, state } = useState<State>([{
    progress: 0,
    message: '兔子收到了主人的呼喚',
    state: 'init'
}, {
    progress: 50,
    message: '兔子努力搬運資料中',
    state: 'loading'
}])

onMounted(async () => {
    await wait(2000)
    state.value = 'loading'
    await wait(3000)
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
