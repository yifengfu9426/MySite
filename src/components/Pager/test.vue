<template>
  <Pager
    :total="totalItems"
    :current="currentPage"
    :limit="pageSize"
    @pageChange="pageChangeHandler"
  />
</template>

<script>
import Pager from "@/components/Pager";

export default {
  components: { Pager },
  data() {
    return {
      currentPage: 1,
      totalItems: 300,
      pageSize: 10,
    };
  },
  methods: {
    pageChangeHandler(page) {
      this.currentPage = page;
    },
  },
};
</script>
