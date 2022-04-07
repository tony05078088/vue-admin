<template>
    <div>用戶資訊</div>
</template>

<script setup>
import { UserDetail } from '@/api/user-manage';
import { defineProps, ref } from 'vue';
import { watchSwitchLang } from '@/utils/i18n';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const detailData = ref({});
const getUserDetail = async () => {
    detailData.value = await UserDetail(props.id);
    console.log(detailData.value);
};

getUserDetail();
watchSwitchLang(getUserDetail);
</script>

<style></style>
