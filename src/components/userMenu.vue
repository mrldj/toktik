<template>
  <footer>
    <el-menu
      stretch
      :default-active="this.$router.path"
      router
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/index">
        <span class="menu-item">首页</span>
      </el-menu-item>
      <el-menu-item index="/attention">
        <span class="menu-item">关注</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-button
          icon="el-icon-plus"
          size="medium"
          circle
        ></el-button>
      </el-menu-item>
      <el-menu-item index="/message">
        <span class="menu-item">消息</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <span class="menu-item">我</span>
      </el-menu-item>
    </el-menu>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleSelect() {
    }
  }
}
</script>

<style>
.el-menu-item {
  width: 20%;
}
.menu-item {
  font-size: 20px;
}
</style>
