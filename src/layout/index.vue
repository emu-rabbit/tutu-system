
import UserPanel from '@/components/UserPanel.vue';

<template>
    <RouterView />
    <img @click="showPanel = true" :class="$style.user" src="@/assets/user.svg" />
    <UserPanel v-model:show="showPanel" :class="$style.panel" />
</template>

<script lang="ts" setup>
import UserPanel from '@/components/UserPanel.vue'
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const showPanel = ref(false)
onBeforeRouteUpdate(() => { showPanel.value = false })
</script>

<style lang="scss" module>
.user, .panel {
    position: fixed !important;
}
.user {
    top: 1em;
    right: 1em;
    cursor: pointer;
    width: 12vmin;
    height: 12vmin;
    z-index: 10;
}

.panel {
    z-index: 20;
    top: 0;
    left: 0;
    background-color: #ed69a611;
    backdrop-filter: blur(10px);
}
</style>
