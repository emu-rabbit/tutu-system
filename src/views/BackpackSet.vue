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
            v-model="count"
            label="個數"
            :class="$style.control"
        />
        <Button
            :class="$style.control"
            :round="true"
            type="primary"
            :disabled="!user || !item"
        >
            發送
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { list } from '@/apis/Item'
import { users } from '@/apis/Manager'
import { showPrimaryNotify } from '@/utils/notify'
import { computed, onMounted, ref } from 'vue'
import { Button, Field } from 'vant'
import Select from '@/components/Select.vue'

const userList = ref<User[] | null>(null)
const itemList = ref<Item[] | null>(null)

const userColumns = computed(() => userList.value?.map(user => ({ text: user.username, value: user.id })))
const itemColumns = computed(() => itemList.value?.map(item => ({ text: item.name, value: item.id })))

const user = ref<SelectorOption | null>(null)
const item = ref<SelectorOption | null>(null)
const count = ref(0)

onMounted(async () => {
    try {
        userList.value = (await users()).data
        itemList.value = (await list()).data
    } catch (e) {
        showPrimaryNotify('無法取得使用者名單或物品列表')
    }
})
</script>

<style lang="scss" module>
.control {
    width: 80%;
}
</style>
