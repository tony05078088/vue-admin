<template>
    <!-- 主題圖標 -->
    <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
        <div>
            <el-tooltip :content="$t('msg.navBar.themeChange')">
                <svg-icon icon="change-theme" />
            </el-tooltip>
        </div>

        <template #dropdown>
            <el-dropdown-menu>
                <el-drop-down-item command="color">
                    {{ $t('msg.theme.themeColorChange') }}
                </el-drop-down-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <!-- 展示彈出層 -->
    <div></div>
</template>

<script setup>
// const handleSetTheme = command => {};
</script>

<style scoped lang="scss"></style>
