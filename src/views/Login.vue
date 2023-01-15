<template>
    <input v-model="email" type="email" />
    <button @click="login">登入</button>
</template>

<script lang="ts" setup>
import { generateAuthenticationOptions, verifyAuthentication } from '@/apis/Auth'
import { startAuthentication } from '@simplewebauthn/browser'
import { ref } from '@vue/reactivity'

const email = ref('')
const login = async () => {
    try {
        const { data: options } = await generateAuthenticationOptions({ email: email.value })
        const asstResp = await startAuthentication(options)
        const { data: verifyRes } = await verifyAuthentication(asstResp)
        console.log(verifyRes)
    } catch (e) {
        console.log(e)
        alert('登入失敗')
    }
}
</script>
