<template>
    <div class="user-manage-container">
        <el-card class="header">
            <div>
                <el-button type="primary">{{ $t('msg.excel.importExcel') }}</el-button>
                <el-button type="success">{{ $t('msg.excel.exportExcel') }}</el-button>
            </div>
        </el-card>
        <!-- table -->
        <el-card>
            <el-table :data="tableData" border style="width: 100%">
                <!-- 索引 -->
                <el-table-column label="#" type="index"></el-table-column>
                <!-- 姓名 -->
                <el-table-column :label="$t('msg.excel.name')" prop="username"></el-table-column>
                <!-- 手機號碼 -->
                <el-table-column :label="$t('msg.excel.avatar')" align="center">
                    <template v-slot="{ row }">
                        <el-image
                            class="avatar"
                            :src="row.avatar"
                            :preview-src-list="[row.avatar]"
                        ></el-image>
                    </template>
                </el-table-column>

                <!-- 頭像 -->

                <el-table-column
                    :label="$t('msg.excel.name')"
                    prop="username"
                    type="index"
                ></el-table-column>

                <!-- 角色 -->
                <el-table-column :label="$t('msg.excel.role')">
                    <template #default="{ row }">
                        <div v-if="row.role && row.role.length > 0">
                            <el-tag v-for="item in row.role" :key="item.id">
                                {{ item.title }}
                            </el-tag>
                        </div>
                        <div v-else>
                            <el-tag>
                                {{ $t('msg.excel.defaultRole') }}
                            </el-tag>
                        </div>
                    </template>
                </el-table-column>
                <!-- 時間 -->
                <el-table-column :label="$t('msg.excel.openTime')">
                    <template #default="{ row }">
                        {{ $filters.dateFilter(row.openTime) }}
                    </template>
                </el-table-column>

                <!-- 操作 -->
                <el-table-column :label="$t('msg.excel.action')" fixed="right" width="300">
                    <template #default="{ row }">
                        <el-button type="primary">{{ $t('msg.excel.show') }}</el-button>
                        <el-button type="info">{{ $t('msg.excel.showRole') }}</el-button>
                        <el-button type="primary" @click="removeUser(row)">{{
                            $t('msg.excel.remove')
                        }}</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                class="pagination"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="size"
                :page-sizes="[2, 5, 10, 20]"
                layout="total,sizes,prev,pager,next,jumper"
                :total="total"
            >
            </el-pagination>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getUserManageList, deleteUser } from '@/api/user-manage';
import { watchSwitchLang } from '@/utils/i18n';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useI18n } from 'vue-i18n';

// 數據相關
const tableData = ref([]);
const total = ref(0);
const page = ref(1);
const size = ref(2);

// 獲取數據的方法
const getListData = async () => {
    const result = await getUserManageList({
        page: page.value,
        size: size.value
    });
    tableData.value = result.list;
    total.value = result.total;
};

getListData();
watchSwitchLang(getListData);

const handleSizeChange = () => {};
const handleCurrentChange = () => {};

// 刪除用戶
const i18n = useI18n();
const removeUser = row => {
    ElMessageBox.confirm(
        i18n.t('msg.excel.dialogTitle1') + row.username + i18n.t('msg.excel.dialogTitle2'),
        {
            type: 'warning'
        }
    ).then(async () => {
        await deleteUser(row._id);
        ElMessage.success(i18n.t('msg.excel.removeSuccess'));
        // 重新渲染數據
        getListData();
    });
};
</script>

<style scoped lang="scss">
.user-manage-container {
    .header {
        margin-bottom: 22px;
        text-align: right;
    }
    ::v-deep .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    ::v-deep .el-tag {
        margin-right: 6px;
    }

    .pagination {
        margin-top: 20px;
        text-align: center;
    }
}
</style>
