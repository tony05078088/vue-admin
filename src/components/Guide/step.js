//
/**
 *
 * 此處不導入@/i18n ,使用i18n.global, 因在router中layout 不是按需加載,所以Guide 會在i18n初始化完成前直接被調用,導致i18n為undefine
 *
 */

const steps = i18n => {
    return [
        {
            element: '#guide-start',
            popover: {
                title: i18n.t('msg.guide.guideTitle'),
                description: i18n.t('msg.guide.guideDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-hamburger',
            popover: {
                title: i18n.t('msg.guide.hamburgerTitle'),
                description: i18n.t('msg.guide.hamburgerDesc')
            }
        },
        {
            element: '#guide-breadcrumb',
            popover: {
                title: i18n.t('msg.guide.breadcrumbTitle'),
                description: i18n.t('msg.guide.breadcrumbDesc')
            }
        },
        {
            element: '#guide-search',
            popover: {
                title: i18n.t('msg.guide.searchTitle'),
                description: i18n.t('msg.guide.searchDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-full',
            popover: {
                title: i18n.t('msg.guide.fullTitle'),
                description: i18n.t('msg.guide.fullDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-theme',
            popover: {
                title: i18n.t('msg.guide.themeTitle'),
                description: i18n.t('msg.guide.themeDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-lang',
            popover: {
                title: i18n.t('msg.guide.langTitle'),
                description: i18n.t('msg.guide.langDesc'),
                position: 'bottom-right'
            }
        },
        {
            element: '#guide-tags',
            popover: {
                title: i18n.t('msg.guide.tagTitle'),
                description: i18n.t('msg.guide.tagDesc')
            }
        },
        {
            element: '#guide-sidebar',
            popover: {
                title: i18n.t('msg.guide.sidebarTitle'),
                description: i18n.t('msg.guide.sidebarDesc'),
                position: 'right-center'
            }
        }
    ];
};

export default steps;
