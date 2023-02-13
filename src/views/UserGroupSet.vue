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
        <CheckboxGroup
            v-model="inputGroup"
            :class="$style.checkboxes"
        >
            <Checkbox
                v-for="g in groups"
                :key="g"
                :name="g"
            >
                {{ userGroupMap(g) }}
            </Checkbox>
        </CheckboxGroup>
        <Button
            :class="$style.control"
            :round="true"
            type="primary"
            :disabled="!user"
            @click="onSubmit"
        >
            發送
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { setGroups, users } from '@/apis/Manager'
import { showPrimaryNotify } from '@/utils/notify'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { Button, CheckboxGroup, Checkbox } from 'vant'
import Select from '@/components/Select.vue'
import { userGroupMap } from '@/utils/map'

const userList = ref<User[] | null>(null)
const groups = ref<UserGroup[]>(['rabbit', 'owner', 'fan', 'user'])

const userColumns = computed(() => userList.value?.map(user => ({ text: user.username, value: user.id })))

const user = ref<SelectorOption | null>(null)
const inputGroup = ref<UserGroup[]>([])

const update = async () => {
    try {
        userList.value = (await users()).data
    } catch (e) {
        showPrimaryNotify('無法取得使用者名單或物品列表')
    }
}

onMounted(update)

watchEffect(async () => {
    inputGroup.value = userList.value
        ?.find(u => u.id === user.value?.value)
        ?.userGroups || []
})

const onSubmit = async () => {
    if (!user.value) return
    try {
        await setGroups({
            id: user.value.value,
            groups: inputGroup.value
        })
        showPrimaryNotify('成功')
        await update()
    } catch (e) {
        showPrimaryNotify('失敗QQ')
    }
}
</script>

<style lang="scss" module>
.control, .checkboxes {
    width: 80%;
}

.checkboxes {
    text-align: left;
    margin-left: 4rem;

    >* {
        margin-bottom: 0.5rem;
    }
}
</style>
