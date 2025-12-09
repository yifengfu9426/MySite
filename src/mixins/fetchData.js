export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      // 具体的组件中，需要提供一个远程获取数据的方法
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
