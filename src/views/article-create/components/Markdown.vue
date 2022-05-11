<template>
    <div class="markdown-container">
        <!-- 渲染區 -->
        <div id="markdown-box"></div>
        <div class="bottom">
            <el-button type="primary" @click="submitCommit">{{
                $t('msg.article.commit')
            }}</el-button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, watch } from 'vue';
import MKEditor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/zh-cn';
import { useStore } from 'vuex';
import { watchSwitchLang } from '@/utils/i18n';
import { commitArticle, editArticle } from './common';

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    detail: {
        type: Object
    }
});

const emits = defineEmits(['onASuccess']);

// Editor 實例
let el;
let mkEditor;

onMounted(() => {
    el = document.querySelector('#markdown-box');
    initEditor();
});

const store = useStore();

const initEditor = () => {
    mkEditor = new MKEditor({
        // el
        el,
        // 高度
        height: '500px',
        // 樣式
        previewStyle: 'vertical',
        // 國際化
        language: store.getters.language === 'tw' ? 'zh-CN' : 'en'
    });
    mkEditor.getMarkdown();
};

watchSwitchLang(() => {
    if (!el) return;
    const htmlStr = mkEditor.getHTML();
    mkEditor.destroy();
    initEditor();
    mkEditor.setHTML(htmlStr);
});

const submitCommit = async () => {
    if (props.detail && props.detail._id) {
        await editArticle({
            id: props.detail._id,
            title: props.title,
            content: mkEditor.getHTML()
        });
    } else {
        await commitArticle({
            title: props.title,
            content: mkEditor.getHTML()
        });
    }

    mkEditor.reset();
    emits('onASuccess');
};

// 編輯相關
watch(
    () => props.detail,
    val => {
        if (val && val.content) {
            mkEditor.setHTML(val.content);
        }
    },
    {
        immediately: true
    }
);
</script>

<style lang="scss" scoped>
.markdown-container {
    .bottom {
        margin-top: 20px;
        text-align: right;
    }
}
</style>
