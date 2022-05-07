<template>
    <div class="editor-container">
        <div id="editor-box"></div>
        <div class="bottom">
            <el-button type="primary" @click="onSubmit">{{ $t('msg.article.commit') }}</el-button>
        </div>
    </div>
</template>

<script setup>
import E from 'wangeditor';
import { onMounted, defineProps, defineEmits, watch } from 'vue';
import i18next from 'i18next';
import { useStore } from 'vuex';
import { commitArticle, editArticle } from './common';
const store = useStore();

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    detail: {
        type: Object
    }
});

const emits = defineEmits(['onSuccess']);

// 初始化editor實例
let editor;

// 獲取到dom

let el;

const initEditor = () => {
    editor = new E(el);
    editor.config.zIndex = 1;
    // menu 提示
    editor.config.showMenuTooltips = true;

    editor.config.menuTooltipPosition = 'down';

    //  國際化
    editor.config.lang = store.getters.language === 'zh' ? 'zh-tw' : 'en';
    editor.i18next = i18next;
    editor.create();
};

onMounted(() => {
    el = document.getElementById('editor-box');
    initEditor();
});

const onSubmit = async () => {
    if (props.detail && props.detail._id) {
        await editArticle({
            id: props.detail._id,
            title: props.title,
            content: editor.txt.html()
        });
    } else {
        await commitArticle({
            title: props.title,
            content: editor.txt.html()
        });
    }
    editor.txt.html('');
    emits(['onSuccess']);
};

// 數據回傳
watch(
    () => props.detail,
    val => {
        if (val && val.content) {
            editor.txt.html(val.content);
        }
    },
    {
        immediate: true
    }
);
</script>

<style lang="scss" scoped>
.editor-container {
    .bottom {
        margin-top: 20px;
        text-align: right;
    }
}
</style>
