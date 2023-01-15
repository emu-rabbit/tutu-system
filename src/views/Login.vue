<template>
    <div
        class="centralize-container"
        :class="$style.container"
    >
        <h1>兔兔登入系統</h1>
        <Field
            v-model="email"
            :class="$style.control"
            type="email"
            label="Email"
        />
        <Button
            :round="true"
            :class="$style.control"
            type="primary"
            @click="login"
        >
            登入
        </Button>
        <RouterLink to="/auth/register">沒有帳號？前往註冊！</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { generateAuthenticationOptions, verifyAuthentication } from '@/apis/Auth'
import { startAuthentication } from '@simplewebauthn/browser'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { Field, Button } from 'vant'

const router = useRouter()

const email = ref('')
const login = async () => {
    try {
        const { data: options } = await generateAuthenticationOptions({ email: email.value })
        const asstResp = await startAuthentication(options)
        await verifyAuthentication(asstResp)
        router.push('/dashboard')
    } catch (e) {
        console.log(e)
        alert('登入失敗')
    }
}
</script>

<style lang="scss" module>
.container {
    .control {
        width: 80%;
        max-width: 500px;
    }
}
</style>
