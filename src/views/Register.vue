<template>
    <div
        class="centralize-container max-vh"
        :class="$style.container"
    >
        <h1>兔兔註冊系統</h1>
        <Field
            v-model="email"
            :class="$style.control"
            type="email"
            label="Email"
        />
        <Field
            v-model="username"
            :class="$style.control"
            type="text"
            label="暱稱"
        />
        <Button
            :round="true"
            :class="$style.control"
            type="primary"
            @click="register"
        >
            註冊
        </Button>
        <RouterLink to="/auth/login">有帳號了？前往登入！</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { generateRegisterOptions, verifyRegister } from '@/apis/Auth'
import { ref } from 'vue'
import { startRegistration } from '@simplewebauthn/browser'
import { Field, Button } from 'vant'
import { useRouter } from 'vue-router'
import { showPrimaryNotify } from '@/utils/notify'

const router = useRouter()

const email = ref('')
const username = ref('')
const register = async () => {
    try {
        const { data: options } = await generateRegisterOptions({ email: email.value, username: username.value })
        const attResp = await startRegistration(options)
        await verifyRegister(attResp)
        showPrimaryNotify('註冊成功，可以登入了')
        router.push('/auth/login')
    } catch (e) {
        // TODO already registered
        console.log(e)
        showPrimaryNotify('註冊失敗')
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
