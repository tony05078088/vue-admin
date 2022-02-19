<template>
    <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活動管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活動列表</el-breadcrumb-item>
        <el-breadcrumb-item>
            <span class="no-redirect"> 活動細節 </span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup></script>

<style scoped lang="scss">
.breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>
