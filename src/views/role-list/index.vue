<template>
    <div>
        <el-card>
            <el-table :data="allRoles" border style="100%">
                <el-table-column type="index" :label="$t('msg.role.index')" width="120">
                </el-table-column>

                <el-table-column :label="$t('msg.role.name')" prop="title"> </el-table-column>
                <el-table-column :label="$t('msg.role.desc')" prop="describe"> </el-table-column>
                <el-table-column :label="$t('msg.role.action')" width="200">
                    <el-button type="primary" size="small">
                        {{ $t('msg.role.assignPermissions') }}
                    </el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { roleList } from '@/api/role';
import { ref } from 'vue';
import { watchSwitchLang } from '@/utils/i18n';

const allRoles = ref([]);
const getRoleList = async () => {
    allRoles.value = await roleList();
};

getRoleList();
watchSwitchLang(getRoleList);
</script>

<style scoped lang="scss"></style>
