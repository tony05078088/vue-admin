import store from '@/store';

function checkPermission(el, binding) {
    const { value } = binding;
    // 獲取當下用戶所有功能權限
    const points = store.getters.userInfo.permission.points;
    // value必須是array
    if (value && value instanceof Array) {
        // 匹配對應的指令
        const hasPermission = points.some(point => {
            return value.includes(point);
        });
        // 匹配失敗
        if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el);
        }
    } else {
        throw new Error('v-permission value is ["admin","editor"...]');
    }
}

export default {
    // 在綁定元素的父組件被掛載之後調用
    mounted(el, binding) {
        checkPermission(el, binding);
    },
    // 在包含組件的VNode及其子組件的VNode更新後調用
    update(el, binding) {
        checkPermission(el, binding);
    }
};
