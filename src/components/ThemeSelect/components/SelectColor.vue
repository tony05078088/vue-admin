<template>
    <el-dialog
        :title="$t('msg.universal.title')"
        :model-value="modelValue"
        @close="closed"
        width="22%"
    >
        <div class="center">
            <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
            <el-color-picker v-model="mColor" :predefine="predefineColors"></el-color-picker>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
                <el-button type="primary" @click="confirm">
                    {{ $t('msg.universal.confirm') }}
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useStore } from 'vuex';
import { generateNewStyle, writeNewStyle } from '@/utils/theme';

defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
});

const emits = defineEmits(['update:modelValue']);
const store = useStore();

// 預定義顏色值
const predefineColors = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255,69,0,0.68)',
    'rgb(255,120,0)',
    'hsv(51,100,98)',
    'hsva(120,40,94,0.5)',
    'hsl(181,100%,37%)',
    'hsla(209,100%,56%,0.73)',
    '#c7158577'
];

// 預設顏色值
const mColor = ref(store.getters.mainColor);

// 關閉
const closed = () => {
    // update是事件的名字 modelValue是要修改的值
    emits('update:modelValue', false);
};

// 確定
// 3.關閉dialog

const confirm = async () => {
    // 1.1獲取主題色
    const newStyleText = await generateNewStyle(mColor.value);
    // 1.2寫入最新的主題色
    writeNewStyle(newStyleText);

    //2.保存最新主題色
    store.commit('theme/setMainColor', mColor.value);

    // 3.關閉dialog
    closed();
};
</script>

<style lang="scss" scoped>
.center {
    text-align: center;
    .title {
        margin-bottom: 12px;
    }
}
</style>
