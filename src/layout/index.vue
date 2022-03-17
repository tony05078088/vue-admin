<template>
    <div
        class="app-wrapper"
        :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
    >
        <!-- 左側menu -->
        <Sidebar
            class="sidebar-container"
            :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
        ></Sidebar>
        <div class="main-container">
            <div class="fixed-header">
                <!-- 頂部 navbar -->
                <Topbar />
                <!-- tags -->
                <Tags-view />
            </div>
            <!-- 內容區 -->
            <app-main></app-main>
        </div>
    </div>
</template>

<script setup>
import Topbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar';
import AppMain from './components/AppMain';
import TagsView from '@/components/TagsView';
// import variables from '@/styles/variables.scss';
</script>

<style scoped lang="scss">
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    height: 100%;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width #{$sideBarDuration};
}
.hideSidebar .fixed-header {
    width: calc(100% - #{$hideBarWidth});
}
</style>
