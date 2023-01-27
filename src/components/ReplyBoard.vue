<template>
    <div
        :class="$style.container"
    >
        <h3>大家的回應</h3>
        <div
            :class="$style.head"
        >
            <img src="@/assets/RabbitDoll.png" />
            <div
                :class="$style.content"
            >
                <p>{{ record.message }}</p>
                <p>{{ fromNow(record.createAt) }}</p>
            </div>
        </div>
        <div
            v-if="replies"
        >
            <p
                v-for="reply in replies"
                :key="reply.id"
                :class="$style.reply"
            >
                {{ reply.username }}: {{ reply.content }}
                <span>{{ fromNow(reply.createAt) }}</span>
            </p>
        </div>
        <div
            :class="$style.control"
        >
            <Field
                :class="$style.input"
                type="text"
                label="回覆"
            />
            <img :class="$style.send" src="@/assets/send.svg" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { fromNow } from '@/utils/date'
import { replies as getReplies } from '@/apis/RabbitStatus'
import { onMounted, ref } from 'vue'
import { showPrimaryNotify } from '@/utils/notify'
import { Field } from 'vant'

const props = defineProps<{
    record: RabbitRecord
}>()

const replies = ref<Reply[] | null>(null)
onMounted(async () => {
    try {
        replies.value = (await getReplies(props.record.id)).data.replies
    } catch (e) {
        showPrimaryNotify('無法取得大家的回應QQ')
    }
})
</script>

<style lang="scss" module>
.container {
    width: 75vmin;
    max-height: 75vh;
    overflow-y: scroll;
    padding: 0 6vw;
    padding-bottom: 4vh;
    color: #2c3e50;

    > h3 {
        font-size: 3.5vh !important;
        padding: 1.5vh 0 !important;
        border-bottom: 0.5px dashed #aaaaaa;
    }

    .head {
        display: flex;
        padding: 2vh 0;
        border-bottom: 0.5px dashed #aaaaaa;

        > img {
            width: 30%;
        }

        > div {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
                font-size: 5vmin;
                text-align: left;
                padding: 0 5%;

                &:last-child {
                    font-size: 3vmin;
                    text-align: right;
                }
            }
        }
    }

    .reply {
        width: 92%;
        padding: 1vh 4%;
        font-size: 2vmin;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 1vmin;
        }

        &:first-child {
            padding-top: 3vh;
        }

        &:last-child {
            padding-bottom: 3vh;
            border-bottom: 1px dashed #aaaaaa;
        }
    }

    .control {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 2vh;
        gap: 2%;
        .input {
            width: 85%;
            border: 1px solid #aaaaaa;
        }

        .send {
            height: 24px;
            padding: 4%;
            border: 1px solid #aaaaaa;
            border-radius: 99999px;
            cursor: pointer;
        }
    }
}
</style>
