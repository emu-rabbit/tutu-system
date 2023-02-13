<template>
    <slot v-if="show" />
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { hasGroup } from '@/utils/auth'
import { computed } from '@vue/reactivity'

const props = defineProps<{
    groups: UserGroup[]
}>()

const store = useStore()
const show = computed(() => {
    const user = store.user
    if (hasGroup(user?.userGroups || [], props.groups)) return true
    return false
})
</script>
