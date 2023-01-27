<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <h2>歷史兔兔</h2>
        <div>
            <div
                v-for="record in records"
                :key="record.id"
                :class="$style.row"
                :style="{
                    color: statusColor(record.status)
                }"
            >
                <span>{{ record.status }}</span>
                <span>
                    <span>{{ record.message }}</span>
                    <span>{{ dayjs(record.createAt).fromNow() }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { recently } from '@/apis/RabbitStatus'
import { showPrimaryNotify } from '@/utils/notify'
import { onMounted, ref } from 'vue'
import { statusColor } from '@/utils/color'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-tw'

dayjs.extend(relativeTime)
dayjs.locale('zh-tw')

const records = ref<RabbitRecord[]>([])
onMounted(async () => {
    try {
        records.value = (await recently()).data.data
    } catch (e) {
        showPrimaryNotify('無法取得歷史兔兔QQ')
    }
})
</script>

<style lang="scss" module>
.container {
    padding: 10vh 0;
    .row {
        display: grid;
        grid-template-columns: 1fr 5fr;
        width: 80vmin;
        gap: 2vw;
        justify-content: space-around;
        border-top: 1px solid #999999;
        padding: 2vmin 2vw;
        font-weight: bold;

        &:last-child {
            border-bottom: 1px solid #999999;
        }

        > span {
            &:first-child {
                font-size: 12vmin;
            }

            &:nth-child(2) {
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                >:first-child {
                    font-size: 4vmin;
                }

                >:nth-child(2) {
                    font-size: 1vmin;
                }
            }
        }
    }
}
</style>
