export default {
    login: {
        title: '使用者登錄',
        loginBtn: '登錄',
        usernameRule: '用戶名必填',
        passwordRule: '密碼不得少於6位',
        desc: `
    測試權限帳號：<br />
    提供三種權限帳號：<br />
    1. 超級管理員帳號： super-admin <br />
    2. 管理員帳號：admin <br />
    3. 測試可配置帳號：test <br />
    密碼統一為：123456 <br />
    <br />
    導入用戶帳號：<br />
    可使用導入的帳號登录 <br />
    密碼統一為：123456  <br />
    <b>注意：導入用戶區分中英文！！！！</b>
    `
    },
    route: {
        profile: '個人資訊',
        user: '用戶',
        excelImport: 'Excel導入',
        userManage: '員工管理',
        userInfo: '員工資訊',
        roleList: '角色列表',
        permissionList: '權限列表',
        article: '文章',
        articleRanking: '文章排名',
        articleCreate: '創建文章',
        articleDetail: '文章細節',
        articleEditor: '文章編輯'
    },
    toast: {
        switchLangSuccess: '切換語系成功'
    },
    tagsView: {
        refresh: '重整',
        closeRight: '關閉右側',
        closeOther: '關閉其他'
    },
    theme: {
        themeColorChange: '主題色更換',
        themeChange: '主题更换'
    },
    universal: {
        confirm: '確認',
        cancel: '取消'
    },
    navBar: {
        themeChange: '主题修改',
        headerSearch: '頁面搜索',
        screenfull: '全螢幕',
        lang: '國際化',
        guide: '功能引導',
        home: '首頁',
        course: '課程主頁',
        logout: '登出'
    },
    guide: {
        close: '關閉',
        next: '下一個',
        prev: '上一個',
        guideTitle: '引導',
        guideDesc: '打開引導功能',
        hamburgerTitle: '漢堡按鈕',
        hamburgerDesc: '打開和關閉左側菜單',
        breadcrumbTitle: '麵包屑',
        breadcrumbDesc: '指示當前頁面位置',
        searchTitle: '搜索',
        searchDesc: '頁面連接搜索',
        fullTitle: '全螢幕',
        fullDesc: '頁面顯示切換',
        themeTitle: '主题',
        themeDesc: '更換項目主題',
        langTitle: '國際化',
        langDesc: '語言切換',
        tagTitle: '標籤',
        tagDesc: '已打開頁面標籤',
        sidebarTitle: '菜單',
        sidebarDesc: '項目功能菜單'
    },
    profile: {
        muted: '《vue3 改編 vue-element-admin，實現後台前端综合解決方案》项目演示',
        introduce: '介紹',
        projectIntroduction: '项目介紹',
        projectFunction: '项目功能',
        feature: '功能',
        chapter: '章節',
        author: '作者',
        name: 'Sunday',
        job: '前端工程師',
        Introduction:
            '高级技术专家，曾就职于国内一线互联网公司，统筹过的多个大型项目用户数已过千万级。致力于研究大前端技术，多次受邀参加国内前端技术分享会，如：2018 年 Google 中国技术分享会。'
    },
    userInfo: {
        print: '列印',
        title: '員工資訊',
        name: '姓名',
        sex: '性别',
        nation: '國籍',
        mobile: '手機號碼',
        province: '居住地',
        date: '入職日期',
        remark: '備註',
        address: '通訊地址',
        experience: '經歷',
        major: '專業',
        glory: '榮耀',
        foot: '簽章：___________日期:___________'
    },
    uploadExcel: {
        upload: '點擊上傳',
        drop: '將文件拖到此處'
    },
    excel: {
        importExcel: 'excel 導入',
        exportExcel: 'excel 導出',
        exportZip: 'zip 導出',
        name: '姓名',
        mobile: '手機號碼',
        avatar: '大頭貼',
        role: '角色',
        openTime: '開通時間',
        action: '操作',
        show: '查看',
        showRole: '角色',
        defaultRole: '員工',
        remove: '删除',
        removeSuccess: '删除成功',
        title: '導出 excel',
        placeholder: 'excel 文件名稱',
        defaultName: '員工管理表',
        close: '取 消',
        confirm: '導 出',
        importSuccess: ' 條員工數據導入成功',
        dialogTitle1: '確定刪除此用戶 ',
        dialogTitle2: ' 嗎？',
        roleDialogTitle: '配置角色'
    },
    role: {
        buttonTxt: '新增角色',
        index: '序號',
        name: '名稱',
        desc: '描述',
        action: '操作',
        assignPermissions: '分配權限',
        removeRole: '删除角色',
        dialogTitle: '新增角色',
        dialogRole: '角色名稱',
        dialogDesc: '角色描述',
        updateRoleSuccess: '用户角色更新成功'
    },
    permission: {
        name: '權限名稱',
        mark: '權限標誌',
        desc: '權限描述'
    },
    article: {
        ranking: '排名',
        title: '標題',
        author: '作者',
        publicDate: '發佈時間',
        desc: '內容簡介',
        action: '操作',
        dynamicTitle: '動態展示',
        show: '查看',
        remove: '刪除',
        edit: '編輯',
        dialogTitle1: '確定刪除文章 ',
        dialogTitle2: ' 嗎？',
        removeSuccess: '文章刪除成功',
        titlePlaceholder: '請輸入文章標題',
        markdown: 'markdown',
        richText: '富文本',
        commit: '提交',
        createSuccess: '文章創建成功',
        editorSuccess: '文章修改成功',
        sortSuccess: '文章排名修改成功'
    }
};
