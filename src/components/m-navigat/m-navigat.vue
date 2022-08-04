<template>
  <view class="m-navigat">
    <view class="bg"></view>
    <view class="header" :class="hasBack ? 'hasBack' : ''">
      <view class="white-bg" :style="{opacity: opacity}"></view>
      <u-icon color="#fff" size="20" v-if="hasBack" name="arrow-left"></u-icon>
      <text :style="{color: opacity === 0 ? '#fff' : '#000'}">文本{{opacity}}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "m-navigat",
  props: {
    hasBack: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
}
</script>

<style scoped lang="scss">
body {
  --opacity: 0;
}
.m-navigat {
  height: 200upx;

  .bg {
    width: 750upx;
    height: 440upx;
    background: url('../../static/image/common/page-bg.png') no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .header {
    width: 100%;
    height: 160upx;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36upx;
    color: #000;
    padding: 94upx 24upx 0 24upx;
    box-sizing: border-box;
    opacity: var(--opacity);

    &.hasBack {
      justify-content:  flex-start;
      gap: 10upx;
    }
    .white-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 160upx;
      background-color: #fff;
      z-index: -1;
    }
  }
}
</style>