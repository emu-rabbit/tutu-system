<template>
    <p>
        <slot />
        {{ disable ? '' : paddingText }}
    </p>
</template>

<script lang="ts" setup>
import useInterval from '@/compositions/useInterval'
import { computed, ref } from '@vue/reactivity'

const paddingLength = ref(0)
const paddingText = computed(() => props.paddingChar.repeat(paddingLength.value))

const props = withDefaults(
    defineProps<{
        maxLength?: number,
        paddingChar?: string,
        disable?: boolean
    }>(),
    {
        maxLength: 3,
        paddingChar: '.',
        disable: false
    }
)

useInterval(() => {
    paddingLength.value = (paddingLength.value + 1) % (props.maxLength + 1)
}, 1000)
</script>
