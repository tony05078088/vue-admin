<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

const store = useStore();
const locale = computed(() => (store.getters.language === 'zh' ? zhCn : en));
</script>

<style lang="scss" scope></style>
