<template>
    <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
        <el-checkbox-group v-model="userRoleTitleList">
            <el-checkbox v-for="item in allRoleList" :key="item.id" :label="item.title">
            </el-checkbox>
        </el-checkbox-group>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="closed"> {{ $t('msg.universal.cancel') }}</el-button>
                <el-button type="primary" @click="onConfirm">
                    {{ $t('msg.universal.confirm') }}</el-button
                >
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { roleList } from '@/api/role';
import { watchSwitchLang } from '@/utils/i18n';
import { userRoles, updateRole } from '@/api/user-manage';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});
const i18n = useI18n();
const emits = defineEmits(['update:modelValue', 'updateRole']);
const onConfirm = async () => {
    const roles = userRoleTitleList.value.map(title => {
        return allRoleList.value.find(role => role.title === title);
    });
    await updateRole(props.userId, roles);
    ElMessage.success(i18n.t('msg.role.updateRoleSuccess'));

    // 通知父組件角色更新成功
    emits('updateRole');

    closed();
};
const closed = () => {
    emits('update:modelValue', false);
};

const allRoleList = ref([]);

// 所有角色
const getListData = async () => {
    allRoleList.value = await roleList();
};

getListData();
watchSwitchLang(getListData);

// 當前用戶角色
const userRoleTitleList = ref([]);
const getUserRoles = async () => {
    const res = await userRoles(props.userId);
    userRoleTitleList.value = res.role.map(item => item.title);
};

watch(
    () => props.userId,
    val => {
        if (val) {
            getUserRoles();
        }
    }
);
</script>

<style></style>
