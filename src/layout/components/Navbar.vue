<template>
    <div class="navbar">
        <!-- 漢堡 -->
        <hamburger class="hamburger-container" />
        <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />
        <div class="right-menu">
            <header-search class="right-menu-item hover-effect" />
            <full-screen class="right-menu-item hover-effect" />
            <lang-select class="right-menu-item hover-effect"></lang-select>
            <theme-select class="right-menu-item hover-effect"></theme-select>
            <guide class="right-menu-item hover-effect"></guide>
            <!-- 頭像 -->
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <el-avatar shape="square" :size="40" :src="$store.getters.userInfo.avatar">
                    </el-avatar>
                    <i class="el-icon-s-tools"> </i>
                </div>
                <template #dropdown>
                    <el-dropdown-menu class="user-dropdown">
                        <router-link to="/">
                            <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
                        </router-link>
                        <a target="__blank" href="#">
                            <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided @click="logout">{{
                            $t('msg.navBar.logout')
                        }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import {} from 'vue';
import { useStore } from 'vuex';
import hamburger from '@/components/hamburger/';
import Breadcrumb from '@/components/Breadcrumb/';
import LangSelect from '@/components/LangSelect/';
import ThemeSelect from '@/components/ThemeSelect/';
import FullScreen from '@/components/FullScreen/';
import HeaderSearch from '@/components/HeaderSearch/';
import Guide from '@/components/Guide';
const store = useStore();
const logout = () => {
    store.dispatch('user/logout');
};
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .right-menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 16px;
        ::v-deep .avatar-container {
            cursor: pointer;
            .avarar-wrapper {
                margin-top: 5px;
                position: relative;
                .el-avatar {
                    --el-avatar-bg-color: none;
                    margin-right: 12px;
                }
            }
        }
        ::v-deep .right-menu-item {
            display: inline-block;
            padding: 0 18px 0 0;
            font-size: 24px;
            color: #5a5e66;
            vertical-align: text-bottom;
            &.hover-effect {
                cursor: pointer;
            }
        }
    }
    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        //   hover動畫
        transition: background 0.5s;

        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }
    .breadcrumb-container {
        float: left;
    }
}
</style>
