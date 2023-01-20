<template>
    <slot v-if="show" />
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { computed } from '@vue/reactivity'

const props = defineProps<{
    groups: UserGroup[]
}>()

const store = useStore()
const show = computed(() => {
    const user = store.user
    if (props.groups.filter(e => user?.userGroup.includes(e) ?? false).length > 0) return true
    return false
})
</script>
