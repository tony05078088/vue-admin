import variables from '@/styles/variables.scss';
// 快捷訪問

const getters = {
    token: state => state.user.token,
    // return true 表示用戶訊息已存在
    hasUserInfo: state => {
        return JSON.stringify(state.user.userInfo) !== '{}';
    },
    userInfo: state => state.user.userInfo,
    cssVar: () => variables
};

export default getters;
