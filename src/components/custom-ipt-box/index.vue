<template>
  <div class="custom-ipt-box card fl-between">
    <u--input
      :placeholder="placeholder"
      :border="false"
      v-model="keyword"
      @change="change"
    ></u--input>
    <view class="icon-box">
      <u-icon name="search" size="32" color="#FFF"></u-icon>
    </view>
  </div>
</template>

<script>
export default {
  name: "custom-ipt-box",
  props: {
    placeholder: {
      type: String,
      default: '请输入关键词进行搜索'
    }
  },
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
.custom-ipt-box {
  height: 68upx;
  border: 1px solid #CCCCCC;
  border-radius: 50upx;
  padding-left: 20upx;
  padding-right: 4upx;
}
.icon-box {
  width: 120upx;
  height: 60upx;
  background: linear-gradient(90deg, #FFE03E 0%, #FF9A16 100%);
  border-radius: 50upx;
  padding-left: 28upx;
  box-sizing: border-box;
}
</style>