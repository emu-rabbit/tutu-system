<template>
    <slot v-if="show" />
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { computed } from '@vue/reactivity'

const props = withDefaults(
    defineProps<{
        groups?: UserGroup[],
        noLogin?: boolean
    }>(),
    {
        groups: () => [],
        noLogin: false
    }
)

const store = useStore()
const show = computed(() => {
    const user = store.user
    if (!user && props.noLogin) return true
    if (!user) return false
    if (props.groups.filter(e => user.userGroup.includes(e)).length > 0) return true
    return false
})
</script>