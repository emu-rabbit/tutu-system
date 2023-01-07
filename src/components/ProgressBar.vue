<template>
    <div :class="$style.outer">
        <div
            :class="$style.inner"
            :style="{
                width: `${progress}%`
            }"
        />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    progress: InRange<0, 100>
}>()
</script>

<style lang="scss" module>
.outer, .inner {
    border-radius: 9999px;
    height: 6px;
    margin: 0;
    padding: 0;
}

.outer {
    position: relative;
    background-color: #99999955;
}

.inner {
    position: absolute;
    top: 0;
    left: 0;
    transition-property: width;
    transition-duration: .5s;
    transition-timing-function: ease-in-out;
    background-color: #ff7777;
}
</style>
