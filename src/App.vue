<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { generateNewStyle, writeNewStyle } from '@/utils/theme';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import { watchSwitchLang } from '@/utils/i18n';

const store = useStore();
const locale = computed(() => (store.getters.language === 'zh' ? zhCn : en));

generateNewStyle(store.getters.mainColor).then(newStyleText => {
    writeNewStyle(newStyleText);
});

// const newStyleText = await generateNewStyle(store.getters.mainColor);
// console.log(newStyleText);
// if (newStyleText) {
//     writeNewStyle(newStyleText);
// }
watchSwitchLang(() => {
    if (store.getters.token) {
        store.dispatch('user/getUserInfo');
    }
});
</script>

<style lang="scss" scope></style>
