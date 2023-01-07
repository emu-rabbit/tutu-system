<template>
    <p>{{ progress }}</p>
    <p>{{ message }}</p>
    <p>{{ state }}</p>
</template>

<script lang="ts" setup>
import useState from '@/compositions/useState'
import { wait } from '@/utils/timer'
import { onMounted } from 'vue'

type State = 'init' | 'running'

const { progress, message, state } = useState<State>([{
    progress: 0,
    message: 'Initializing',
    state: 'init'
}, {
    progress: 50,
    message: 'Running',
    state: 'running'
}])

onMounted(async () => {
    await wait(2000)
    state.value = 'running'
    await wait(3000)
})
</script>
