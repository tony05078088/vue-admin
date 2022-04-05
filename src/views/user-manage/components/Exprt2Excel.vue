<template>
    <el-dialog :title="$t('msg.excel.title')" :model-value="modelValue" width="30%">
        <el-input :placeholder="$t('msg.excel.placeholder')" v-model="excelName"></el-input>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="closed">
                    {{ $t('msg.excel.close') }}
                </el-button>
                <el-button type="primary" @click="onConfirm" :loading="loading">
                    {{ $t('msg.excel.confirm') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { watchSwitchLang } from '@/utils/i18n';
import { getUserManageAllList } from '@/api/user-manage';
defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
});
// 導出文件名
const i18n = useI18n();
let exportDefaultName = i18n.t('msg.excel.defaultName');
const excelName = ref('');
excelName.value = exportDefaultName;
// 監聽語言變化
watchSwitchLang(() => {
    exportDefaultName = i18n.t('msg.excel.defaultName');
    excelName.value = exportDefaultName;
});

const emits = defineEmits(['update:modelValue']);

// 點擊確定按鈕
const loading = ref(false);
const closed = () => {
    emits('update:modelValue', false);
};

const onConfirm = async () => {
    loading.value = true;
    const allUser = (await getUserManageAllList()).list;
    console.log(allUser);
    closed();
};
</script>

<style></style>
