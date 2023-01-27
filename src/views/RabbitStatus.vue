<template>
    <div
        class="centralize-container max-vh"
        :class="$style.container"
        :style="{
            color: color
        }"
    >
        <div style="display: contents;" @click="showReplies = true">
            <h1>{{ record?.status }}</h1>
            <h6>
                {{ record?.message || '-' }}
            </h6>
            <hr />
            <h3>{{ diff }}</h3>
        </div>
        <ShowWithUserGroup
            :groups="['rabbit', 'owner']"
        >
            <RouterLink to="/rabbit-status/recently"> {{ '< =' }} 去查看歷史兔兔</RouterLink>
        </ShowWithUserGroup>
        <ShowWithUserGroup
            :groups="['rabbit', 'owner', 'fan']"
        >
            <Popup
                v-model:show="showReplies"
                :round="true"
                :closeable="true"
            >
                <ReplyBoard
                    v-if="record"
                    :record="record"
                />
            </Popup>
        </ShowWithUserGroup>
    </div>
</template>

<script lang="ts" setup>
import { latest } from '@/apis/RabbitStatus'
import { computed, onUnmounted, onMounted, ref } from 'vue'
import { showPrimaryNotify } from '@/utils/notify'
import ShowWithUserGroup from '@/components/ShowWithUserGroup.vue'
import ReplyBoard from '@/components/ReplyBoard.vue'
import { statusColor } from '@/utils/color'
import { Popup } from 'vant'
import { fromNow } from '@/utils/date'

const showReplies = ref(false)

const record = ref<RabbitRecord | null>(null)
const diff = ref<string>('')
const color = computed(() => statusColor(record.value?.status || null))
const update = async () => {
    try {
        const { data } = (await latest()).data
        record.value = data
        diff.value = fromNow(record.value?.createAt)
    } catch (e) {
        showPrimaryNotify('無法取得兔子最新狀態QQ')
    }
}

let timerID: number | null = null
onMounted(async () => {
    await update()
    timerID = setInterval(update, 60 * 1000)
})
onUnmounted(() => {
    if (timerID) clearInterval(timerID)
})
</script>

<style lang="scss" module>
.container {
    h1, h6, h3 {
        margin: 0;
    }

    h1 {
        font-size: 25vmin !important;
        line-height: 1;
    }

    h6 {
        font-size: 4vmin !important;
    }

    hr {
        margin: 1vh;
        width: 60%;
        opacity: 0.7;
        border: none;
        border-bottom: 1px solid;
    }

    h3 {
        font-size: 5vmin !important;
    }

    a {
        position: fixed;
        bottom: 0;
        margin: 5vh 0;
    }
}
</style>
