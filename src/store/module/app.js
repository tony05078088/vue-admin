import { getItem, setItem } from '@/utils/storage';
import { LANG, TAGS_VIEW } from '@/constant';
export default {
    namespaced: true,
    state: () => ({
        sidebarOpened: true,
        language: getItem(LANG) || 'zh',
        tagsViewList: getItem(TAGS_VIEW) || []
    }),
    mutations: {
        triggerLeftbarOpened(state) {
            state.sidebarOpened = !state.sidebarOpened;
        },
        setLanguage(state, lang) {
            setItem(LANG, lang);
            state.language = lang;
        },
        // 添加tags
        addTagsViewList(state, tag) {
            const isFind = state.tagsViewList.find(item => {
                return item.path === tag.path;
            });
            //   處理重複
            if (!isFind) {
                state.tagsViewList.push(tag);
                setItem(TAGS_VIEW, state.tagsViewList);
            }
        },
        // 為指定的tag修改title
        changeTagsView(state, { index, tag }) {
            state.tagsViewList[index] = tag;
            setItem(TAGS_VIEW, state.tagsViewList);
        },
        /**
         *
         * @param { type:'other' || 'right' || 'index' } payload
         */
        removeTagsView(state, payload) {
            if (payload.type === 'index') {
                // 直接刪除當前指定的項
                state.tagsViewList.splice(payload.index, 1);
            } else if (payload.type === 'other') {
                state.tagsViewList.splice(
                    payload.index + 1,
                    state.tagsViewList.length - payload.index - 1
                );
                state.tagsViewList.splice(0, payload.index);
            } else if (payload.type === 'right') {
                state.tagsViewList.splice(
                    payload.index + 1,
                    state.tagsViewList.length - payload.index - 1
                );
            }
            setItem(TAGS_VIEW, state.tagsViewList);
        }
    }
};
