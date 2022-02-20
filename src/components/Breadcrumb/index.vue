<template>
    <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item, index) in BreadCrumbData" :key="item.path">
            <!-- 不可點擊 -->
            <span class="no-redirect" v-if="index === BreadCrumbData.length - 1">
                {{ item.meta.title }}
            </span>
            <!-- 可點擊 -->
            <span class="redirect" v-else @click="onLinkClick(item)"> {{ item.meta.title }} </span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

// 生成數組數據
const BreadCrumbData = ref([]);
const getBreadCrumData = () => {
    // 當前路由的標準化路由紀錄
    BreadCrumbData.value = route.matched.filter(item => item.meta && item.meta.title);
    console.log(BreadCrumbData);
};

// 監聽 路由變化
const route = useRoute();

watch(
    route,
    () => {
        getBreadCrumData();
    },
    {
        // 進入組件就觸發
        immediate: true
    }
);
// 跳轉點擊事件
const router = useRouter();
const onLinkClick = item => {
    router.push(item.path);
};

// 將來需要主題替換 故hover顏色 設置為主色
const store = useStore();
const linkHoverColor = ref(store.getters.cssVar.menuBg);
</script>

<style scoped lang="scss">
.breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    .redirect {
        color: #666;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            color: v-bind(linkHoverColor);
        }
    }

    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>
