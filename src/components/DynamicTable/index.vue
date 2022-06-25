<template>
  <div>
    <d-table :data="data" :config="tableConfig" @pageInfoChange="getList" />
  </div>
</template>
<script lang="jsx" setup>
import { onMounted, ref } from "vue";
import DTable from "./DTable";
import { getStudentList } from "src/api";
const data = ref([]);
const total = ref(0);
const getList = async (info) => {
  const { list, all } = await getStudentList(info);
  data.value = list;
  total.value = all;
};
// 表格整体配置
const tableConfig = ref({
  table: { border: true },
  pagination: { layout: "prev, pager, next", total },
  columns: [
    { type: "selection", label: "多选" },
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
      align: "center",
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
          <>
            <el-button
              type="primary"
              onClick={() => handleEdit(rowData, index)}
            >
              编辑
            </el-button>
            <el-button
              type="danger"
              onClick={() => handleDelete(rowData, index)}
            >
              删除
            </el-button>
          </>
        );
      },
    },
  ],
});
onMounted(() => {
  getList({ currentPage: 0, pageSize: 10 });
});

const handleEdit = (row, index) => {
  console.log("currentRow ", row, index);
};
const handleDelete = () => {};
</script>
<style lang="less" scoped></style>
