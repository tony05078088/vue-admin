import { login } from '@/api/sys';
import { setItem, getItem } from '@/utils/storage';
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
                        console.log(data);
                        this.commit('user/setToken', data.token);
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        }
    }
};
