<template>
    <div>
        <h1>{{ status }}</h1>
        <button @click="update">Refresh</button>
    </div>
</template>

<script lang="ts" setup>
import { latest } from '@/apis/RabbitStatus'
import { onMounted, ref } from 'vue'

const status = ref<number | null>(null)
const update = async () => {
    try {
        status.value = (await latest()).data.data.status
    } catch (e) {
        alert('無法取得兔子最新狀態QQ')
    }
}

onMounted(update)
</script>
