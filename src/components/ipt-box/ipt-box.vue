<template>
  <div class="ipt-box">
    <u-icon name="search" size="24"></u-icon>
    <u--input
      placeholder="请输入关键词进行搜索"
      :border="false"
      v-model="keyword"
      @change="change"
    ></u--input>
  </div>
</template>

<script>
export default {
  name: "ipt-box",
  props: {},
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    /**
     * 内容变化事件
     */
    change() {
      this.$emit('change', this.keyword);
    }
  }
}
</script>

<style scoped lang="scss">
.ipt-box {
  display: flex;
  height: 68upx;
  background: #FFFFFF;
  border-radius: 50upx;
  opacity: 0.8;
  padding-left: 20upx;
}
</style>