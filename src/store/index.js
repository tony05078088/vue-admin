import { createStore } from 'vuex';
import user from './module/user';
import app from './module/app';
import getters from './getters';
export default createStore({
    getters,
    modules: {
        user,
        app
    }
});
