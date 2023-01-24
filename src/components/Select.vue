<template>
    <div>
        <Field
            :disabled="disabled"
            :label="label"
            :model-value="value?.text"
            is-link
            readonly
            type="text"
            @click="showPicker = true"
        />
        <Popup
            v-model:show="showPicker"
            round
            position="bottom"
            teleport="#app"
        >
            <Picker
                :columns="options"
                :visible-option-num="3"
                @cancel="showPicker = false"
                @confirm="onConfirm"
            />
        </Popup>
    </div>
</template>

<script lang="ts" setup>
import { Field, Popup, Picker } from 'vant'
import { ref } from 'vue'

withDefaults(
    defineProps<{
        value: SelectorOption | null,
        options?: SelectorOption[],
        disabled?: boolean,
        label?: string
    }>(),
    {
        options: () => [],
        disabled: false,
        label: ''
    }
)

const emit = defineEmits(['update:value'])

const showPicker = ref(false)
const onConfirm = ({ selectedOptions }: { selectedOptions: SelectorOption[] }) => {
    const option = selectedOptions[0]
    emit('update:value', option)
    showPicker.value = false
}
</script>
