<template>
    <div
        class="centralize-container"
        :class="$style.container"
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
                <span>{{ itemMap(stack.name) }}</span>
                <span>{{ stack.count }}個</span>
            </div>
            <p v-if="backpack.length === 0">
                背包空空如也QQ
            </p>
        </div>
        <p v-else>
            兔兔努力載入中...
        </p>
    </div>
</template>

<script lang="ts" setup>
import { items } from '@/apis/Backpack'
import { showPrimaryNotify } from '@/utils/notify'
import { ref, onMounted } from 'vue'
import { itemMap } from '@/utils/map'

const backpack = ref<ItemStack[] | null>(null)

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
.container {
    p {
        font-size: 4vmin;
    }

    .list {
        width: 75%;

        > * {
            width: 100%;
        }
        .row {
            display: grid;
            grid-template-columns: 5fr 3fr;
            justify-content: space-around;
            gap: 2vw;
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
}
</style>
