import { defineComponent } from "vue";
export default defineComponent({
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    console.log("重新渲染组件");
    return () => (
      <el-table-column
        {...props.item}
        v-slots={{
          default: ({ row, $index }) => {
            return props.item.render(row, $index);
          },
        }}
      ></el-table-column>
    );
  },
});
