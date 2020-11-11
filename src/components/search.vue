<template>
  <div
    class="filter-container"
    v-if="searchAble == true"
  >
    <el-input
      placeholder="请输入内容"
      v-model="input"
      prefix-icon="el-icon-search"
      style="float:left"
      size="large"
      clearable
    />
  </div>
  <div
    class="edit-container"
    v-else
  >
    <el-button
      icon="el-icon-search"
      style="float:right"
      size="medium"
      circle
      @click="searchAble = true"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchAble: false
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
