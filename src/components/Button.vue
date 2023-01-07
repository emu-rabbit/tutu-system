<template>
    <button
        :class="$style.container"
    >
        <slot />
    </button>
</template>

<style lang="scss" module>
.container {
    background-color: #ff7777;
    color: white;
    border: #ff4444 1px solid;
    padding: 0.25em 1em;
    border-radius: 0.5em;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
}
</style>
