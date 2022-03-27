<template>
    <!-- 主題圖標 -->
    <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
        <!-- 圖標 -->
        <div>
            <el-tooltip :content="$t('msg.navBar.themeChange')">
                <svg-icon id="guide-theme" icon="change-theme"></svg-icon>
            </el-tooltip>
        </div>
        <!-- menu -->
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="color">
                    {{ $t('msg.theme.themeColorChange') }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <!-- 展示彈出層 -->
    <div class="selector">
        <select-color v-model="selectColorVisible"> </select-color>
    </div>
</template>

<script setup>
import SelectColor from './components/SelectColor.vue';
import { ref } from 'vue';

const selectColorVisible = ref(false);
const handleSetTheme = () => {
    selectColorVisible.value = true;
};
</script>

<style scoped lang="scss"></style>
