<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <h2>兔兔現在狀態如何呢？</h2>
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
import { showPrimaryNotify } from '@/utils/notify'
import { ref } from '@vue/reactivity'
import { Field, Button } from 'vant'
import { onMounted } from 'vue'

const status = ref(0)
const createStatus = async () => {
    try {
        await create(status.value)
        showPrimaryNotify('Success')
    } catch (e) {
        console.log(e)
        showPrimaryNotify('Failed')
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
