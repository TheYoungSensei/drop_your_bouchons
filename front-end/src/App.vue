<template>
  <div id="app">
    <el-container>
      <Header :active-tab="activeTab" @select="handleTabSelect">

      </Header>
      <el-main>
        <router-view>

        </router-view>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'app',
    components: {
      Header
    },
    computed: {
      activeTab: function() {
        return this.$route.path
      }
    },
    methods: {
      handleTabSelect: function (key) {
        console.log(key);
        this.$router.push(key);
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    background-color: #d7d6d6;
  }

  #app {
    font-family: "PT Sans", serif;
    font-weight: 400;
    letter-spacing: 0;
    font-style: normal;
    height: 100%;
    background-color: #ffff;
  }
</style>
