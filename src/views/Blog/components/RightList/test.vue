<template>
  <RightList :list="list" @select="selectHandler" />
</template>

<script>
import RightList from "./";
export default {
  data() {
    return {
      list: [
        { name: "a", selected: false, chlidren: [] },
        { name: "b", selected: false, chlidren: [] },
        {
          name: "c",
          selected: true,
          chlidren: [
            {
              name: "c-1",
              selected: false,
              chlidren: [{ name: "c-1-1", selected: false, chlidren: [] }],
            },
            { name: "c-2", selected: false, chlidren: [] },
            { name: "c-3", selected: false, chlidren: [] },
            { name: "c-4", selected: false, chlidren: [] },
          ],
        },
        { name: "d", selected: false, chlidren: [] },
      ],
    };
  },
  components: { RightList },
  methods: {
    selectHandler(item) {
      console.log(item);
      this.cancelAllSelect(this.list);
      item.selected = true;
    },
    cancelAllSelect(list) {
      list.forEach((element) => {
        element.selected = false;
        // 校验：children 存在 + 是数组 + 有长度，再递归
        if (
          element.chlidren &&
          Array.isArray(element.chlidren) &&
          element.chlidren.length > 0
        ) {
          // 修复：递归传当前项的 children，而非父级的
          this.cancelAllSelect(element.chlidren);
        }
      });
    },
  },
};
</script>

<style></style>
