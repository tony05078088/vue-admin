<template>
    <div class="article_create">
        <el-card>
            <el-input
                class="title-input"
                :placeholder="$t('msg.article.titlePlaceholder')"
                v-model="title"
                maxlength="20"
                clearable
            ></el-input>
            <el-tabs v-model="activeName">
                <el-tab-pane :label="$t('msg.article.markdown')" name="markdown">
                    <markdown :title="title" :detail="detail" @onSuccess="onSuccess" />
                </el-tab-pane>
                <el-tab-pane :label="$t('msg.article.richText')" name="editor">
                    <editor />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Editor from './components/Editor.vue';
import Markdown from './components/Markdown.vue';
import { articleDetail } from '@/api/article';
import { useRoute } from 'vue-router';

const activeName = ref('markdown');
const title = ref('');

const onSuccess = () => {
    title.value = '';
};

// 處理編輯相關
const route = useRoute();
const detail = ref({});
const articleId = route.params.id;
const getArticleDetail = async () => {
    detail.value = await articleDetail(articleId);
    // 標題
    title.value = detail.value.title;
};

if (articleId) {
    getArticleDetail();
}
</script>

<style scoped lang="scss">
.title-input {
    margin-bottom: 20px;
}
</style>
