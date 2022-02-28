<template>
    <el-menu
        :collapse="!$store.getters.sidebarOpened"
        :default-active="activeMenu"
        :uniqueOpened="true"
        :background-color="$store.getters.cssVar.menuBg"
        :text-color="$store.getters.cssVar.menuText"
        :active-text-color="$store.getters.cssVar.menuActiveText"
        router
    >
        <leftbar-item v-for="item in routes" :key="item.path" :route="item"></leftbar-item>
    </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { generateRoutes, filterRoutes } from '@/utils/route';
import LeftbarItem from './LeftbarItem.vue';
const router = useRouter();

const routes = computed(() => {
    const filteredRoutes = filterRoutes(router.getRoutes());
    return generateRoutes(filteredRoutes);
});

//默認激活
const route = useRoute();
const activeMenu = computed(() => {
    const { path } = route;
    return path;
});
</script>

<style lang="scss" scoped></style>
