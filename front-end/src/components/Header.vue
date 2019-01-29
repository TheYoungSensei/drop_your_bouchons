<template>
    <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">
                Home
            </el-menu-item>
            <el-menu-item index="/progress">
                Progress
            </el-menu-item>
            <el-menu-item index="/scoreboard">
                Donators
            </el-menu-item>
            <el-menu-item index="/initiative">
                Initiative
            </el-menu-item>
        </el-menu>
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
          }
        },
        methods: {
            handleSelect: function (key, keyPath) {
                this.$emit('select', key);
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
        top:0px;
        transform: translate3d(0px, 0px, 0px);
        transition: background-color .25s ease-in-out;
    }
</style>
