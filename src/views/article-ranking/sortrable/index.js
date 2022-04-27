import Sortable from 'sortablejs';
import { ref } from 'vue';
export const tableRef = ref(null);

export const initSortable = () => {
    const el = tableRef.value.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];

    // 1.要拖曳的元素
    // 2.配置對象
    Sortable.create(el, {
        // 拖曳時的class名
        ghostClass: 'sortable-ghost',
        onEnd() {}
    });
};
