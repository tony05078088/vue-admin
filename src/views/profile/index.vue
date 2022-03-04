<template>
    <div class="profile">
        <!-- {{ $t('msg.test') }} -->
        <el-row>
            <el-button type="primary">Default</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <select-color v-model="selectColorVisible"> </select-color>
        </el-row>
    </div>
</template>

<script setup>
import SelectColor from '@/components/ThemePicker/components/SelectColor.vue';
import { ref } from 'vue';

const selectColorVisible = ref(false);
</script>
