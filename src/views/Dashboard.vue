<template>
    <div>
        <p>{{ username }}</p>
        <p>{{ email }}</p>
        <button @click="handleLogout">登出</button>
    </div>
</template>

<script lang="ts" setup>
import { info, logout } from '@/apis/Auth'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const username = ref('')

onMounted(async () => {
    try {
        const { data } = await info()
        email.value = data.email
        username.value = data.username
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
