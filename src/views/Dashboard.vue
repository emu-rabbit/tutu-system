<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <h2>{{ username }}</h2>
        <p>Email: {{ email }}</p>
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
import { info, logout } from '@/apis/Auth'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from 'vant'
import { computed } from '@vue/reactivity'

const groupMap: Record<string, string> = { rabbit: '兔子大帝', owner: '主人', user: '兔粉' }

const router = useRouter()

const email = ref('')
const username = ref('')
const userGroups = ref<string[]>([])
const groupText = computed(() => userGroups.value.map(group => (groupMap[group] || '')).join(', '))

onMounted(async () => {
    try {
        const { data } = await info()
        email.value = data.email
        username.value = data.username
        userGroups.value = data.user_groups
    } catch (e) {
        console.log(e)
        alert('取得個人資訊失敗QQ')
    }
})

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
    align-items: flex-start;
    width: 70vw;
    padding: 0 15vw;

    p {
        font-size: small !important;
    }

    .btn {
        width: 20vw;
    }
}
</style>
