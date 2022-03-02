<template>
    <div class="login-container">
        <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
            <div class="title-container">
                <h3 class="title">{{ $t('msg.login.title') }}</h3>
                <lang-select class="lang-select" effect="light" />
            </div>
            <!-- username -->
            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon icon="user"></svg-icon>
                </span>
                <el-input
                    placeholder="username"
                    name="username"
                    v-model="loginForm.username"
                    type="text"
                ></el-input>
            </el-form-item>
            <!-- password -->
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon="password"></svg-icon>
                </span>
                <el-input
                    placeholder="password"
                    name="password"
                    :type="passwordType"
                    v-model="loginForm.password"
                ></el-input>
                <span class="show-pwd" @click="onChangePwd">
                    <span class="svg-container">
                        <svg-icon
                            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
                        ></svg-icon>
                    </span>
                </span>
            </el-form-item>

            <!-- 登錄按鈕 -->
            <el-button
                type="primary"
                style="width: 100%; margin-bottom: 30px"
                :loading="loading"
                @click="handleLogin"
                >{{ $t('msg.login.loginBtn') }}</el-button
            >
            <div class="tips" v-html="$t('msg.login.desc')"></div>
        </el-form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { validatePassword } from './rules';
import { useStore } from 'vuex';
import { watchSwitchLang } from '@/utils/i18n';
import langSelect from '@/components/LangSelect/index';
//數據源
const loginForm = ref({
    username: 'super-admin',
    password: '123456'
});

// 驗證規則
const i18n = useI18n();
const loginRules = ref({
    username: [
        {
            required: true,
            trigger: 'blur',
            message: computed(() => {
                return i18n.t('msg.login.usernameRule');
            })
        }
    ],
    password: [
        {
            required: true,
            trigger: 'blur',
            validator: validatePassword()
        }
    ]
});

watchSwitchLang(() => {
    loginFormRef.value.validate();
});

//處理密碼框文字顯示
const passwordType = ref('password');
// passwordType的值需 text與password來回切換
// 使用ref聲明的數據 script 必須加value來獲取具體值  html則否
const onChangePwd = () => {
    if (passwordType.value === 'password') {
        passwordType.value = 'text';
    } else {
        passwordType.value = 'password';
    }
};
// 處理登錄
const loading = ref(false);
const store = useStore();
const loginFormRef = ref(null);
const handleLogin = () => {
    // 1.進行表單校驗
    loginFormRef.value.validate(valid => {
        if (!valid) return;
        // 2.觸發登錄動作
        loading.value = true;
        store
            .dispatch('user/login', loginForm.value)
            .then(() => {
                // 成功登錄
                loading.value = false;
                // 3.進行登錄後處理
            })
            .catch(err => {
                loading.value = false;
                console.log(err);
            });
    });
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        ::v-deep .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }

        ::v-deep .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;
            }
        }
        .tips {
            font-size: 16px;
            color: white;
            line-height: 24px;
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
        .lang-select {
            position: absolute;
            top: 4px;
            right: 0;
            background-color: #fff;
            font-size: 22px;
            padding: 4px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>
