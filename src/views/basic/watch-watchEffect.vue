<template>
  <div>
    <h4>{{ age }}</h4>
    <el-button @click="addAge()">addAge</el-button>
    <h4>{{ student }}</h4>
    <el-button @click="modifyStudent()">modifyStudent</el-button>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
// 监听ref对象
const age = ref(18);
const addAge = () => age.value++;
watch(age, () => console.log("age ", age));

// 监听reactive对象
const student = reactive({ name: "zeng", age: 18 });
const modifyStudent = () => (student.age = 20);
watch(student, () => {
  console.log("student ", student);
});
</script>
<style lang="less" scoped></style>
