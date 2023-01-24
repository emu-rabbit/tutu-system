<template>
    <div
        class="centralize-container"
    >
        <h1>兔兔發禮物</h1>
        <Select
            v-model:value="user"
            :class="$style.control"
            :options="userColumns"
            label="使用者"
        />
        <Select
            v-model:value="item"
            :class="$style.control"
            :options="itemColumns"
            label="物品"
        />
        <Field
            :model-value="count !== null ? count : ''"
            label="個數"
            :class="$style.control"
            :disabled="!user || !item || count === null"
            @update:model-value="count = $event"
        />
        <Button
            :class="$style.control"
            :round="true"
            type="primary"
            :disabled="!user || !item"
            @click="setItemCount"
        >
            發送
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { list } from '@/apis/Item'
import { users } from '@/apis/Manager'
import { count as getCount, set } from '@/apis/Backpack'
import { showPrimaryNotify } from '@/utils/notify'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { Button, Field } from 'vant'
import Select from '@/components/Select.vue'

const userList = ref<User[] | null>(null)
const itemList = ref<Item[] | null>(null)

const userColumns = computed(() => userList.value?.map(user => ({ text: user.username, value: user.id })))
const itemColumns = computed(() => itemList.value?.map(item => ({ text: item.name, value: item.id })))

const user = ref<SelectorOption | null>(null)
const item = ref<SelectorOption | null>(null)
const count = ref<number | null>(0)

onMounted(async () => {
    try {
        userList.value = (await users()).data
        itemList.value = (await list()).data
    } catch (e) {
        showPrimaryNotify('無法取得使用者名單或物品列表')
    }
})

watchEffect(async () => {
    count.value = null
    if (user.value && item.value) {
        try {
            count.value = await (await getCount(user.value.value, item.value.value)).data.count
        } catch (e) {
            showPrimaryNotify('無法取得背包物品個數')
        }
    }
})

const setItemCount = async () => {
    try {
        if (!user.value || !item.value || count.value === null) return
        await set(user.value.value, item.value.value, count.value)
        showPrimaryNotify('設定成功')
    } catch (e) {
        console.log(e)
        showPrimaryNotify('無法設定物品個數')
    }
}
</script>

<style lang="scss" module>
.control {
    width: 80%;
}
</style>
