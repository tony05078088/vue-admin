<template>
    <UploadExcel :onSuccess="onSuccess" />
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel';
import { USER_RELATIONS } from './utils';
import { ElMessage } from 'element-plus';
import { getUserBatchImport } from '@/api/user-manage';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const i18n = useI18n();
/* eslint-disable */
// 數據解析成功之後的callback

const router = useRouter();
const onSuccess = async ({ header, result }) => {
    const updateData = generateData(result);
    await getUserBatchImport(updateData);
    ElMessage.success(result.length + i18n.t('msg.excel.importSuccess'));
    router.push('/user/manage');
};

// 篩選數據
const generateData = results => {
    const arr = [];
    results.forEach(item => {
        const userInfo = {};
        Object.keys(item).forEach(key => {
            userInfo[USER_RELATIONS[key]] = item[key];
        });
        arr.push(userInfo);
    });
    return arr;
};
</script>

<style scoped lang="scss"></style>
