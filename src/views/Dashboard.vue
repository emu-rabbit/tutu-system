<template>
    <div>
        <p>{{ username }}</p>
        <p>{{ email }}</p>
    </div>
</template>

<script lang="ts" setup>
import { info } from '@/apis/Auth'
import { onMounted, ref } from 'vue'

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
</script>
