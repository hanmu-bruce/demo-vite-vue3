<template>
  <div>
    <hello />
    <!-- 引入静态资源 -->
    <el-image
      src="/asset/logo.png"
      style="width: 100px; height: 100px"
    ></el-image>
  </div>
</template>
<script setup>
import Hello from "component/Hello.vue";
</script>
<style lang="less" scoped></style>
