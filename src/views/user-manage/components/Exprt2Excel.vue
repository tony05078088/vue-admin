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
import { USER_RELATIONS } from './Export2ExcelConstant';
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
    // 數據
    const allUser = (await getUserManageAllList()).list;
    console.log(allUser);

    // 導入工具包
    const excel = await import('@/utils/Export2Excel');
    const data = formateJson(USER_RELATIONS, allUser);
    excel.export_json_to_excel({
        // excel表頭 ['姓名', '聯繫方式', '角色', '入職時間']
        header: Object.keys(USER_RELATIONS),
        // excel數據
        data,
        // 文件名稱
        filename: excelName.value || exportDefaultName
        // 是否自動列寬
        // 文件類型
    });
    closed();
};

//  當使用excel_json_to_excel時,傳遞的數據 必須是二維array: [[關羽,軍團長,15151515,2021-12-31],[關羽,軍團長,15151515,2021-12-31],[關羽,軍團長,15151515,2021-12-31]]
const formateJson = (headers, rows) => {
    // header : 對照表 , rows: 數據源 第一個代表數錊,第二個代表裡面的數據內容
    return rows.map(item => {
        return Object.keys(headers).map(key => {
            // 角色需要進行特殊處例
            if (headers[key] === 'role') {
                const roles = item[headers[key]];
                return JSON.stringify(roles.map(role => role.title));
            }

            return item[headers[key]];
        });
    });
};
</script>

<style></style>
