<template>
    <!-- element icon  -->
    <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i> -->
    <el-icon v-if="icon.includes('el-icon')">
        <edit></edit>
    </el-icon>
    <!-- 非element icon -->
    <svg-icon v-else :icon="icon"></svg-icon>
    <!-- 文字 -->
    <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue';
import { generateTitle } from '@/utils/i18n';
import { Edit } from '@element-plus/icons-vue';
defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});
</script>

<style></style>
