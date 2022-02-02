import { login } from '@/api/sys';
import { setItem, getItem } from '@/utils/storage';
import router from '@/router/index';
import { TOKEN } from '@/constant/';
import md5 from 'md5';
export default {
    namespaced: true,
    state: () => ({
        token: getItem() || ''
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            setItem(TOKEN, token);
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
        }
    }
};
