<template>
  <div id="app">
    <el-container>
      <Header :active-tab="activeTab" @select="handleTabSelect" @login="login">

      </Header>
      <el-main>
        <router-view>

        </router-view>
      </el-main>
      <el-footer>
        <p>© WeImpact all rights reserved.</p>
        <p>Icons made by <b>Freepik from <a class="link" href="https://www.flaticon.com/">www.flaticon.com</a></b></p>
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
        this.$router.push(key);
      },
      login: function () {
        this.$router.push('/login');
      }
    }
  }
</script>

<style>
  html {
    min-height: 100%;
  }

  body {
    margin: 0;
    min-height: 100%;
    background-color: #d7d6d6;
  }

  #app {
    font-family: "PT Sans", serif;
    font-weight: 400;
    letter-spacing: 0;
    font-style: normal;
    min-height: 100%;
    background-color: #ffff;
  }

  .el-footer {
    width: 100%;
    font-size: 12px;
    background-color: #363839;
    border-color: #e9eaee;
    color: #dddddd;
    text-align: center;
    margin-top: 20px;
  }

  .link:visited {
    color: #dddddd;
    text-decoration: none;
  }

  .link:hover {
    color: #dddddd;
    text-decoration: none;
  }

  .link:active {
    color: #dddddd;
    text-decoration: none;
  }

  .link:link {
    color: #dddddd;
    text-decoration: none;
  }
</style>
