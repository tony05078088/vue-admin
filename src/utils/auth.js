import { getItem, setItem } from '@/utils/storage';
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant';
// 獲取時間戳方法
export function getTimeStamp() {
    return getItem(TIME_STAMP);
}

//設置時間戳方法
export function setTimeStamp() {
    setItem(TIME_STAMP, Date.now());
}

//對比是否超時方法
export function isCheckTimeout() {
    // 當前時間
    const currentTime = Date.now();
    //緩存時間
    const timeStamp = getTimeStamp();
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
}
