<template>
    <el-timeline>
        <el-timeline-item
            v-for="item in chapterData"
            :key="item.id"
            :timestamp="item.timestamp"
            placement="top"
        >
            <el-card>
                <h4>{{ item.content }}</h4>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<script setup>
import { chapter } from '@/api/user';
import { ref } from 'vue';
import { watchSwitchLang } from '@/utils/i18n';
const chapterData = ref([]);

const getChaper = async () => {
    chapterData.value = await chapter();
};
getChaper();

watchSwitchLang(getChaper);
</script>

<style></style>
