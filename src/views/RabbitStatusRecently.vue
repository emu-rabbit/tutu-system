<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <h2>歷史兔兔</h2>
        <div v-if="records.length > 0">
            <div
                v-for="record in records"
                :key="record.id"
                :class="$style.row"
                :style="{
                    color: statusColor(record.status)
                }"
                @click="selectedRecord = record"
            >
                <span>{{ record.status }}</span>
                <span>
                    <span>{{ record.message }}</span>
                    <span>{{ fromNow(record.createAt) }}</span>
                </span>
            </div>
        </div>
        <div v-else>
            <p>一天內沒有新的兔兔狀態QQ</p>
        </div>
        <Popup
            :show="selectedRecord !== null"
            :round="true"
            :closeable="true"
            :lazy-render="false"
            @close="selectedRecord = null"
        >
            <ReplyBoard
                v-if="selectedRecord"
                :record="selectedRecord"
                :show-reply-input="selectedRecord === records[0]"
            />
        </Popup>
    </div>
</template>

<script lang="ts" setup>
import { recently } from '@/apis/RabbitStatus'
import { showPrimaryNotify } from '@/utils/notify'
import { onMounted, ref } from 'vue'
import { statusColor } from '@/utils/color'
import { fromNow } from '@/utils/date'
import ReplyBoard from '@/components/ReplyBoard.vue'
import { Popup } from 'vant'

const records = ref<RabbitRecord[]>([])
onMounted(async () => {
    try {
        records.value = (await recently()).data.data
    } catch (e) {
        showPrimaryNotify('無法取得歷史兔兔QQ')
    }
})

const selectedRecord = ref<RabbitRecord | null>(null)
</script>

<style lang="scss" module>
.container {
    min-height: 100vh;

    h2 {
        margin-top: 8vh !important;
        margin-bottom: 2vh !important;
    }
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
            margin-bottom: 8vh;
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
                    font-size: 3vmin;
                }

                >:nth-child(2) {
                    font-size: 2vmin;
                }
            }
        }
    }

    p {
        font-size: 2vmin;
    }
}
</style>
