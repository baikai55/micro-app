<template>
  <div class="main-content">
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          :router="true"
          mode="horizontal"
        >
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/app/sys/">
            <i class="el-icon-document"></i>
            <span slot="title">sys</span>
          </el-menu-item>
          <el-menu-item index="/app/app/">
            <i class="el-icon-setting"></i>
            <span slot="title">app</span>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <!-- 左侧导航 -->

        <el-container>
          <!-- 内容 -->
          <el-main class="main">
            <router-view></router-view>
            <div id="container"></div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { start } from "qiankun";

export default {
  name: "indexMain",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>
<style>
.main.el-main {
  padding: 10px 0 0 0;
}
</style>
<style scoped>
.main-content {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #3f4044;
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  width: auto;
  cursor: pointer;
}
.el-aside {
  background-color: #d3dce6;
  width: 200px !important;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-container {
  height: 100%;
}
</style>
