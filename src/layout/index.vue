<template>
    <RouterView />
    <img :class="$style.user" src="@/assets/user.svg" />
</template>

<style lang="scss" module>
.user {
    position: fixed;
    top: 1em;
    right: 1em;
    cursor: pointer;
    width: 12vmin;
    height: 12vmin;
}
</style>
