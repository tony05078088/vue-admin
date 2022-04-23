<template>
    <div>
        <el-card>
            <el-table :data="allRoles" border style="100%">
                <el-table-column type="index" :label="$t('msg.role.index')" width="120">
                </el-table-column>

                <el-table-column :label="$t('msg.role.name')" prop="title"> </el-table-column>
                <el-table-column :label="$t('msg.role.desc')" prop="describe"> </el-table-column>
                <el-table-column :label="$t('msg.role.action')" width="200" #default="{ row }">
                    <el-button
                        type="primary"
                        size="mini"
                        @click="onDistribute(row)"
                        v-permission="['distributePermission']"
                    >
                        {{ $t('msg.role.assignPermissions') }}
                    </el-button>
                </el-table-column>
            </el-table>
        </el-card>
        <DistributePermission v-model="visible" :roleId="selectRoleId" />
    </div>
</template>

<script setup>
import { roleList } from '@/api/role';
import { ref } from 'vue';
import { watchSwitchLang } from '@/utils/i18n';
import DistributePermission from './components/DistributePermission.vue';

const allRoles = ref([]);
const getRoleList = async () => {
    allRoles.value = await roleList();
};

const visible = ref(false);
const selectRoleId = ref('');
const onDistribute = row => {
    visible.value = true;
    selectRoleId.value = row.id;
};

getRoleList();
watchSwitchLang(getRoleList);
</script>

<style scoped lang="scss"></style>
