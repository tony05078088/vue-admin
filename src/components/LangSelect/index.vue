<template>
    <el-dropdown class="international" trigger="click" @command="handleSetLanguage">
        <div>
            <el-tooltip :content="$t('msg.navBar.lang')" :effect="effect">
                <div id="guide-lang">
                    <svg-icon icon="language"></svg-icon>
                </div>
            </el-tooltip>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :disabled="language === 'tw'" command="tw">中文</el-dropdown-item>
                <el-dropdown-item :disabled="language === 'en'" command="en"
                    >English</el-dropdown-item
                >
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';

defineProps({
    effect: {
        type: String,
        default: 'dark',
        validator: value => {
            return ['dark', 'light'].indexOf(value) !== -1;
        }
    }
});

const store = useStore();
const language = computed(() => store.getters.language);

// 切換語言的方法
const i18n = useI18n();
const handleSetLanguage = lang => {
    // 切換i18n的locale
    i18n.locale.value = lang;
    // 修改vuex中保存的language
    store.commit('app/setLanguage', lang);
    // 提示
    ElMessage.success(i18n.t('msg.toast.switchLangSuccess'));
};
</script>

<style scoped lang="scss"></style>
