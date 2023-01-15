<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <Field
            :class="$style.control"
            v-model="status"
            :disabled="disabled"
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
            :disabled="disabled"
            @click="createStatus"
        >
            Create
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { create, latest } from '@/apis/RabbitStatus'
import { ref } from '@vue/reactivity'
import { Field, Button, showNotify } from 'vant'
import { onMounted } from 'vue'

const status = ref(0)
const createStatus = async () => {
    try {
        await create(status.value)
        showNotify({
            message: 'Success',
            type: 'primary'
        })
    } catch (e) {
        console.log(e)
        showNotify({
            message: 'Failed',
            type: 'primary'
        })
    }
}

const disabled = ref(true)
onMounted(async () => {
    try {
        const { data } = (await latest()).data
        status.value = data.status
        disabled.value = false
    } catch (e) {
        // ...
    } finally {
        disabled.value = false
    }
})
</script>

<style lang="scss" module>
.container {
    .control {
        width: 80%;
        max-width: 500px;
    }
}
</style>
