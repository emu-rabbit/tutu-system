<template>
    <div
        class="centralize-container"
    >
        <h1>兔兔編輯物品</h1>
        <Select
            v-model:value="itemOption"
            :class="$style.control"
            :options="itemColumns"
            label="物品"
        />
        <Field
            v-model="inputName"
            label="名字"
            :class="$style.control"
            :disabled="true"
        />
        <Field
            v-model="inputDescription"
            label="描述"
            type="textarea"
            :class="[$style.control, $style.des]"
            :disabled="!item"
        />
        <Button
            :class="$style.control"
            :round="true"
            type="primary"
            :disabled="!item"
            @click="onSubmit"
        >
            發送
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { edit, list } from '@/apis/Item'
import Select from '@/components/Select.vue'
import { itemMap } from '@/utils/map'
import { showPrimaryNotify } from '@/utils/notify'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { Button, Field } from 'vant'

const itemList = ref<Item[] | null>(null)
const itemColumns = computed(() => itemList.value?.map(item => ({ text: itemMap(item.name), value: item.id })))

const itemOption = ref<SelectorOption | null>(null)
const item = computed(() => itemList.value?.find(i => i.id === itemOption.value?.value))

const inputName = ref('')
const inputDescription = ref('')

const updateList = async () => {
    try {
        itemList.value = (await list()).data
        inputName.value = item.value?.name || ''
        inputDescription.value = item.value?.description || ''
    } catch (e) {
        showPrimaryNotify('無法取得使用者名單或物品列表')
    }
}

onMounted(updateList)

watchEffect(async () => {
    inputName.value = item.value?.name || ''
    inputDescription.value = item.value?.description || ''
})

const onSubmit = async () => {
    try {
        if (!itemOption.value) throw new Error()
        await edit({
            id: itemOption.value.value,
            name: inputName.value,
            description: inputDescription.value
        })
        showPrimaryNotify('成功')
        await updateList()
    } catch (e) {
        showPrimaryNotify('失敗')
    }
}
</script>

<style lang="scss" module>
.control {
    width: 80%;
}
.des {
    border-radius: 20px !important;
}
</style>
