import { login, getUserInfo } from '@/api/sys';
import { setItem, getItem, removeAllItem } from '@/utils/storage';
import router from '@/router/index';
import { TOKEN } from '@/constant/';
import md5 from 'md5';
export default {
    namespaced: true,
    state: () => ({
        token: getItem() || '',
        userInfo: {}
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            setItem(TOKEN, token);
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        // 登錄請求動作
        login(context, userInfo) {
            const { username, password } = userInfo;
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                })
                    .then(data => {
                        this.commit('user/setToken', data.token);
                        // 跳轉
                        router.push('/');
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        // 獲取用戶訊息
        async getUserInfo() {
            const res = await getUserInfo();
            this.commit('user/setUserInfo', res);
            return res;
        },
        // 退出登錄
        logout() {
            this.commit('user/setToken', '');
            this.commit('user/setUserInfo', {});
            removeAllItem();
            // Todo: 清理權限相關配置
            router.replace('/login');
        }
    }
};
