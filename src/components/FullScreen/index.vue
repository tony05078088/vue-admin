<template>
    <div @click="onToggle">
        <svg-icon :icon="isFullScreen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import screenfull from 'screenfull';
// 是否全螢幕
const isFullScreen = ref(false);

const onToggle = () => {
    screenfull.toggle();
};

// 監聽screenfull的變化
const change = () => {
    isFullScreen.value = screenfull.isFullscreen;
};
// on:綁定監聽;
onMounted(() => {
    screenfull.on('change', change);
});

//  off:取消監聽
onUnmounted(() => {
    screenfull.off('change', change);
});
</script>

<style></style>
