<template>
    <div
        class="centralize-container"
    >
        {{ backpack }}
    </div>
</template>

<script lang="ts" setup>
import { items } from '@/apis/Backpack'
import { showPrimaryNotify } from '@/utils/notify'
import { ref, onMounted } from 'vue'

const backpack = ref<{
    itemID: string,
    name: string,
    count: number
}[] | null>(null)

onMounted(async () => {
    try {
        backpack.value = (await items()).data
    } catch (e) {
        console.log(e)
        showPrimaryNotify('無法取得背包內容QQ')
    }
})
</script>
