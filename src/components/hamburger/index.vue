<template>
    <div class="hamburger_container" @click="toggleClick">
        <svg-icon :icon="icon"></svg-icon>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const toggleClick = () => {
    store.commit('app/triggerLeftbarOpened');
};

const store = useStore();
const icon = computed(() => {
    return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed';
});
</script>

<style scoped lang="scss">
.hamburger_container {
    padding: 0 16px;
    .hamburger {
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
    }
}
</style>
