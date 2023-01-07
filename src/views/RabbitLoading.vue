<template>
    <p>{{ progress }}</p>
    <p>{{ message }}</p>
</template>

<script lang="ts" setup>
import useProgress from '@/compositions/useProgress'
import { wait } from '@/utils/timer'
import { onMounted } from 'vue'

const { progress, message, setProgressStatus } = useProgress()

onMounted(async () => {
    await wait(2000)
    setProgressStatus({
        progress: 20,
        message: 'Step1'
    })
    await wait(3000)
    setProgressStatus({
        progress: 80,
        message: 'Meow'
    })
})
</script>
