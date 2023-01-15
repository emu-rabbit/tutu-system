<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <Field
            :class="$style.control"
            v-model="status"
            label="狀態"
            type="number"
            min="0"
            max="100"
            step="1"
        />
        <Button
            :class="$style.control"
            :round="true"
            type="primary"
            @click="createStatus"
        >
            Create
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { create } from '@/apis/RabbitStatus'
import { ref } from '@vue/reactivity'
import { Field, Button } from 'vant'

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

<style lang="scss" module>
.container {
    .control {
        width: 80%;
        max-width: 500px;
    }
}
</style>
