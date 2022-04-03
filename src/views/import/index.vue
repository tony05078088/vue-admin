<template>
    <UploadExcel :onSuccess="onSuccess" />
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel';

const onSuccess = excelData => {
    console.log(excelData);
};
</script>

<style scoped lang="scss"></style>
