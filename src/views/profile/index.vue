<template>
    <div class="my-container">
        <el-row>
            <el-col :span="6">
                <project-card class="user-card" :features="featureData"></project-card>
            </el-col>
            <el-col :span="18">
                <el-card>
                    <el-tabs v-model="activeName">
                        <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
                            <Feature />
                        </el-tab-pane>
                        <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
                            <Chapter />
                        </el-tab-pane>
                        <el-tab-pane :label="$t('msg.profile.author')" name="author">
                            <Author />
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import projectCard from './components/ProjectCard.vue';
import Feature from './components/Feature.vue';
import Author from './components/Author.vue';
import Chapter from './components/Chapter.vue';
import { feature } from '@/api/user';
import { ref } from 'vue';
import { watchSwitchLang } from '@/utils/i18n';

const activeName = ref('feature');

const featureData = ref([]);
const getFeature = async () => {
    featureData.value = await feature();
};

getFeature();

// 監聽語言切換
watchSwitchLang(getFeature);
</script>

<style scoped lang="scss">
.my-container {
    .user-card {
        margin-right: 20px;
    }
}
</style>
