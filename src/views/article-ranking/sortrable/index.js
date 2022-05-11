import Sortable from 'sortablejs';
import { ref } from 'vue';
export const tableRef = ref(null);
import { articleSort } from '@/api/article';
import { ElMessage } from 'element-plus';
import i18n from '@/i18n';

export const initSortable = (tableData, cb) => {
    const el = tableRef.value.$el.querySelector('.el-table__body > tbody');

    // 1.要拖曳的元素
    // 2.配置對象
    Sortable.create(el, {
        // 拖曳時的class名
        ghostClass: 'sortable-ghost',
        async onEnd(event) {
            const { newIndex, oldIndex } = event;
            await articleSort({
                initRanking: tableData.value[oldIndex].ranking,
                finalRanking: tableData.value[newIndex].ranking
            });
            ElMessage.success(i18n.global.t('msg.article.sortSuccess'));

            // 為了重新渲染
            tableData.value = [];
            // 重新獲取數據
            cb && cb();
        }
    });
};
