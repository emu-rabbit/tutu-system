<template>
    <div
        class="centralize-container"
    >
        <h1>兔兔背包</h1>
        <div
            v-if="backpack"
            :class="$style.list"
        >
            <div
                v-for="stack in backpack"
                :key="stack.id"
                :class="$style.row"
            >
                <span>{{ map(stack.name) }}</span>
                <span>{{ stack.count }}個</span>
            </div>
            <div v-if="backpack.length === 0">
                背包空空如也QQ
            </div>
        </div>
        <div v-else>
            兔兔努力載入中...
        </div>
    </div>
</template>

<script lang="ts" setup>
import { items } from '@/apis/Backpack'
import { showPrimaryNotify } from '@/utils/notify'
import { ref, onMounted } from 'vue'

const backpack = ref<{
    id: string,
    name: string,
    count: number
}[] | null>(null)

const map = (name: string) => ({
    poop: '兔兔精華'
})[name] || name

onMounted(async () => {
    try {
        backpack.value = (await items()).data
    } catch (e) {
        console.log(e)
        showPrimaryNotify('無法取得背包內容QQ')
    }
})
</script>

<style lang="scss" module>
.list {
    width: 75%;

    > * {
        width: 100%;
    }
    .row {
        display: flex;
        justify-content: space-around;
        padding: 2vh 0;
        border-top: 1px solid #999999;

        &:last-child {
            border-bottom: 1px solid #999999;
        }

        span {
            font-size: 6vmin;
        }
    }
}
</style>
