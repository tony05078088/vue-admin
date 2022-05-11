<template>
    <div>
        <el-tooltip :content="$t('msg.navBar.guide')">
            <div id="guide-start" @click="onClick">
                <svg-icon icon="guide" />
            </div>
        </el-tooltip>
    </div>
</template>

<script setup>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import steps from './step';

let driver = null;
const i18n = useI18n();
const onClick = () => {
    driver.defineSteps(steps(i18n));
    driver.start();
};

onMounted(() => {
    driver = new Driver({
        // 禁止點擊蒙版關閉
        allowClose: false,
        closeBtnText: i18n.t('msg.guide.close'),
        nextBtnText: i18n.t('msg.guide.next'),
        prevBtnText: i18n.t('msg.guide.prev')
    });
});
</script>

<style scoped></style>
