<template>
    <input v-model="email" type="email" />
    <input v-model="username" type="text" />
    <button @click="register">註冊</button>
</template>

<script lang="ts" setup>
import { generateRegisterOptions, verifyRegister } from '@/apis/Auth'
import { ref } from 'vue'
import { startRegistration } from '@simplewebauthn/browser'

const email = ref('')
const username = ref('')
const register = async () => {
    try {
        const { data: options } = await generateRegisterOptions({ email: email.value, username: username.value })
        console.log(options)
        const attResp = await startRegistration(options)
        const verified = await verifyRegister(attResp)
        console.log({ verified })
    } catch (e) {
        console.log(e)
        alert('註冊失敗QQ')
    }
}
</script>
