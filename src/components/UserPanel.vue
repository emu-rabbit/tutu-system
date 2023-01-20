<template>
    <div
        v-show="show"
        class="centralize-container"
        :class="$style.container"
    >
        <img :class="$style.close" src="@/assets/close.svg" @click="emits('update:show', false)" />
        <h2>{{ user?.username }}</h2>
        <p>Email: {{ user?.email }}</p>
        <p>身分： {{ groupText }}</p>
        <Button
            :class="$style.btn"
            :round="true"
            size="small"
            type="primary"
            @click="handleLogout"
        >
            登出
        </Button>
        <RouterLink to="/rabbit-status"> {{ '<=' }} 去看看兔兔的狀態吧</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { logout } from '@/apis/Auth'
import { useRouter } from 'vue-router'
import { Button } from 'vant'
import { computed, toRefs } from '@vue/reactivity'
import useStore from '@/store'

const groupMap: Record<UserGroup, string> = { rabbit: '兔子大帝', owner: '主人', user: '兔粉' }

withDefaults(
    defineProps<{
        show?: boolean
    }>(),
    {
        show: true
    }
)

const emits = defineEmits(['update:show'])

const router = useRouter()
const store = useStore()

const { user } = toRefs(store)
const groupText = computed(() => user.value?.userGroup.map(group => (groupMap[group] || '')).join(', ') || '')

const handleLogout = async () => {
    try {
        await logout()
    } catch (e) {
        // ...
    } finally {
        router.push('/auth/login')
    }
}
</script>

<style lang="scss" module>
.container {
    position: relative;
    align-items: flex-start;
    width: 70vw;
    padding: 0 15vw;

    p {
        font-size: small !important;
    }

    .btn {
        width: 20vw;
    }

    .close {
        position: absolute;
        top: 2.5em;
        right: 2.5em;
        cursor: pointer;
        width: 10vmin;
        height: 10vmin;
        z-index: 10;
    }
}
</style>
