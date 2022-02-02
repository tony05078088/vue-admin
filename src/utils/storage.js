// 存儲數據
export const setItem = (key, value) => {
    // value 分為兩種情況: 1. 基本數據類型 2.複雜數據類型
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};

// 獲取數據
export const getItem = key => {
    const data = window.localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch {
        return data;
    }
};

//刪除指定數據
export const removeItem = key => {
    window.localStorage.removeItem(key);
};

//刪除所有數據
export const removeAllItem = () => {
    window.localStorage.clear();
};
