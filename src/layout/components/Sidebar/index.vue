<template>
    <div>
        <div class="logo-container">
            <el-avatar
                :size="logoHeight"
                shape="square"
                src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            />
            <h1 class="logo-title" v-if="$store.getters.sidebarOpened">Admin</h1>
        </div>
        <el-scrollbar>
            <leftbar-menu></leftbar-menu>
        </el-scrollbar>
    </div>
</template>

<script setup>
import LeftbarMenu from './LeftbarMenu.vue';
import {} from 'vue';
const logoHeight = 44;
</script>

<style lang="scss" scoped>
.logo-container {
    height: v-bind(logoHeight) + 'px';
    padding: 10px 0 22px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo-title {
        margin-left: 10px;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 16px;
        white-space: nowrap;
    }

    .el-avatar {
        --el-avatar-bg-color: none;
    }
}
</style>
