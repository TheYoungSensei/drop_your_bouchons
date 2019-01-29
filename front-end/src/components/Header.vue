<template>
    <el-header>
        <a href="https://wemanity.com/" class="logo">
            <img class="img-logo" src="../assets/LOGO-horizontal.png" alt="Wemanity" />
        </a>
        <el-menu class="nav" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">
                Home
            </el-menu-item>
            <el-menu-item index="/progress">
                Progress
            </el-menu-item>
            <el-menu-item index="/contributors">
                Contributors
            </el-menu-item>
            <el-menu-item index="/initiative">
                Initiative
            </el-menu-item>
        </el-menu>
        <font-awesome-icon
                :class="loginClass"
                size="2x"
                icon="user-astronaut"
                @click="login"
        ></font-awesome-icon>
    </el-header>
</template>

<script>
    export default {
        props: {
            activeTab: String,
        },
        computed: {
          activeIndex: function () {
              return this.activeTab;
          },
          loginClass: function () {
            if (this.$route.path === '/login') {
                return 'current-login';
            }
            return 'login';
          }
        },
        methods: {
            handleSelect: function (key, keyPath) {
                this.$emit('select', key);
            },
            login: function () {
                this.$emit('login');
            }
        }
    }
</script>

<style>
    .el-header {
        backface-visibility: hidden;
        background-color: #ffffff;
        box-shadow: rgba(0,0,0,.117647) 0 1px 3px;
        box-sizing: border-box;
        color: #747474;
        display: block;
        font-family: "PT Sans", serif;
        font-size: 16px;
        font-stretch: 100%;
        font-style: normal;
        font-variant-caps: normal;
        font-variant-east-asian: normal;
        font-variant-ligatures: normal;
        font-variant-numeric: normal;
        font-weight: 400;
        height: 133px;
        letter-spacing: normal;
        line-height: 24px;
        padding-left: 30px;
        padding-right: 30px;
        -webkit-text-size-adjust: 100%;
        top: 0px;
        transform: translate3d(0px, 0px, 0px);
        transition: background-color .25s ease-in-out;
    }

    .nav {
        display: -webkit-inline-box;
    }

    .logo {
        width: fit-content;
        height: fit-content;
        display: inline;
    }

    .img-logo {
        width: 200px;
        height:auto;
        margin-bottom: 13px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .login {
        float: right;
        margin-top: 12px;
    }

    .login:hover {
        color: #409EFF;
        cursor: pointer;
    }

    .current-login {
        float: right;
        margin-top: 12px;
        color: #409EFF;
    }
</style>
