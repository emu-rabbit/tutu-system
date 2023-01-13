<template>
    <input
        v-model="status"
        type="number"
        min="0"
        max="100"
        step="1"
    />
    <button @click="createStatus">Create</button>
</template>

<script lang="ts" setup>
import { create } from '@/apis/RabbitStatus'
import { ref } from '@vue/reactivity'

const status = ref(0)
const createStatus = async () => {
    try {
        await create(status.value)
        alert('Success')
    } catch (e) {
        console.log(e)
        alert('Failed')
    }
}
</script>
