<template>
    <el-menu
        :uniqueOpened="true"
        background-color="#545c64"
        text-color="#fff"
        default-active="2"
        active-text-color="#ffd04b"
    >
        <!-- 子集menu -->
        <el-sub-menu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>導航一</span>
            </template>
            <el-menu-item index="1-1">選項1</el-menu-item>
            <el-menu-item index="1-2">選項2</el-menu-item>
        </el-sub-menu>

        <!-- 具體menu -->
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>導航四</template>
        </el-menu-item>
    </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>
