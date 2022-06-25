<template>
  <div>
    <d-table :data="data" :config="tableConfig" @pageInfoChange="getList" />
  </div>
</template>
<script lang="jsx" setup>
import { onMounted, ref } from "vue";
import DTable from "./DTable";
import { getStudentList } from "src/api";
const data = ref();
const total = ref(0);
const getList = async (info) => {
  const { list, all } = await getStudentList(info);
  data.value = list;
  total.value = all;
};
// 表格配置
const tableConfig = ref({
  pagination: { layout: "prev, pager, next", total },
  columns: [
    { type: "selection", label: "" },
    { prop: "name", label: "name" },
    {
      prop: "height",
      label: "height",
      render: (rowData, index) => {
        return (
          <el-input v-model={rowData.height} placeholder="input your height" />
        );
      },
    },
    { prop: "address", label: "address" },
    {
      prop: "image",
      label: "image",
      render: (rowData, index) => {
        return (
          <el-image
            style={{ width: "40px", height: "40px" }}
            src={rowData.image}
          ></el-image>
        );
      },
    },
    {
      prop: "time",
      label: "time",
      formatter: (row) => {
        return new Date(parseInt(row.time)).toLocaleDateString();
      },
    },
    {
      prop: "actions",
      label: "actions",
      render: (rowData, index) => {
        return (
          <div>
            <el-button type="primary" onClick={() => handleEdit(rowData)}>
              编辑
            </el-button>
            <el-button type="danger" onClick={() => handleDelete(rowData)}>
              删除
            </el-button>
          </div>
        );
      },
    },
  ],
});
onMounted(() => {
  getList({ currentPage: 0, pageSize: 10 });
});

const handleEdit = (row) => {
  console.log("currentRow ", row);
};
const handleDelete = () => {};
</script>
<style lang="less" scoped></style>
