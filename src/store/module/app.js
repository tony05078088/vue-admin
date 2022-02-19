export default {
    namespaced: true,
    state: () => ({
        sidebarOpened: true
    }),
    mutations: {
        triggerLeftbarOpened(state) {
            state.sidebarOpened = !state.sidebarOpened;
        }
    }
};
