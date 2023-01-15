<template>
    <div
        class="centralize-container"
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

const email = ref('')
const username = ref('')
const register = async () => {
    try {
        const { data: options } = await generateRegisterOptions({ email: email.value, username: username.value })
        const attResp = await startRegistration(options)
        const verified = await verifyRegister(attResp)
        // TODO register success
        console.log({ verified })
    } catch (e) {
        // TODO already registered
        console.log(e)
        alert('註冊失敗QQ')
    }
}
</script>

<style lang="scss" module>
.container {
    .control {
        width: 80%;
    }
}
</style>
