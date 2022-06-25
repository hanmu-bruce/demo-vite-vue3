import { defineComponent, reactive, ref, watch } from "vue";
import DColumn from "./DColumn";

export default defineComponent({
  name: "DTable",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    // 表格配置
    config: {
      type: Object,
      default: () => {
        return {
          table: {},
          columns: [],
          pagination: { layout: "prev, pager, next", total: 0 },
        };
      },
    },
  },
  emits: ["pageInfoChange"],
  setup(props, { emit }) {
    const pageInfo = reactive({
      currentPage: 1,
      pageSize: 10,
    });
    // 监听分页信息是否有修改
    watch(
      () => pageInfo,
      (newValue) => {
        emit("pageInfoChange", {
          // 记得要-1
          currentPage: newValue.currentPage - 1,
          pageSize: newValue.pageSize,
        });
      },
      {
        deep: true,
      }
    );

    return () => {
      return (
        <>
          <el-table data={props.data} {...props.config.table}>
            {props.config.columns.map((item, index) => {
              return item.render ? (
                <DColumn item={item} key={index} />
              ) : (
                <el-table-column {...item} key={index}></el-table-column>
              );
            })}
          </el-table>
          <el-pagination
            total={props.config.pagination.total}
            v-model:current-page={pageInfo.currentPage}
            v-model:page-size={pageInfo.pageSize}
          />
        </>
      );
    };
  },
});
