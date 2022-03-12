<template>
    <div class="header-search" :class="{ show: isShow }" @click="onShowClick">
        <svg-icon class-name="search-icon" icon="search"></svg-icon>

        <el-select
            ref="headerSearchSelectRef"
            class="header-search-select"
            v-model="search"
            filterable
            remote
            default-first-option
            placeholder="search"
            :remote-method="querySearch"
            @change="onSelectChange"
        >
            <el-option
                v-for="option in searchOptions"
                :key="option.item.path"
                :label="option.item.title.join(' > ')"
                :value="option.item"
            ></el-option>
        </el-select>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { filterRoutes } from '@/utils/route';
import { generateRoutes } from './FuseData';
import { useRouter } from 'vue-router';
import { watchSwitchLang } from '@/utils/i18n';
import Fuse from 'fuse.js';
// 數據源
const router = useRouter();
let searchPool = computed(() => {
    const filteredRoutes = filterRoutes(router.getRoutes());
    console.log(generateRoutes(filteredRoutes));
    return generateRoutes(filteredRoutes);
});

// 模糊搜索相關 1.數據源 2.配置
let fuse;
const initFuse = searchPool => {
    fuse = new Fuse(searchPool.value, {
        // 是否按優先級排序
        shouldSort: true,
        //   匹配算法放棄的時機 閥值0.0 需要完美匹配(字母,位置) 閥值1.0將匹配任何內容
        threshold: 0.4,

        // 匹配長度超過這個值的才會被認為是匹配
        minMatchCharLength: 1,
        // 將被搜索的鍵列表,支援加權搜索,在字串和對象數組中搜索
        // name:搜索的鍵
        // weight:對應權重
        keys: [
            {
                name: 'title',
                weight: 0.7
            },
            {
                name: 'path',
                weight: 0.3
            }
        ]
    });
};
initFuse(searchPool);

// 控制search展示
const isShow = ref(false);
const onShowClick = () => {
    isShow.value = !isShow.value;
};
// search相關

// 搜索方法
const searchOptions = ref([]);
const querySearch = query => {
    if (query !== '') {
        searchOptions.value = fuse.search(query);
    } else {
        searchOptions.value = [];
    }
};
// 選中option的callback
const onSelectChange = val => {
    router.push(val.path);
};

watchSwitchLang(() => {
    searchPool = computed(() => {
        const filteredRoutes = filterRoutes(router.getRoutes());
        return generateRoutes(filteredRoutes);
    });

    initFuse(searchPool);
});
</script>

<style lang="scss" scoped>
.header-search {
    ::v-deep .search-icon {
        cursor: pointer;
        font-size: 18px;
        vertical-align: middle;
    }
    .header-search-select {
        font-size: 18px;
        transition: width 0.2s;
        width: 0;
        overflow: hidden;
        background: transparent;
        border-radius: 0;
        display: inline-block;
        vertical-align: middle;

        ::v-deep .el-input__inner {
            border-radius: 0;
            border: 0;
            padding-left: 0;
            padding-right: 0;
            box-shadow: none !important;
            border-bottom: 1px solid #d9d9d9;
            vertical-align: middle;
        }
    }
    &.show {
        .header-search-select {
            width: 210px;
            margin-left: 10px;
        }
    }
}
</style>
