<template>
  <view class="m-navigat">
    <slot name="bg">
      <view class="bg"></view>
    </slot>
    <view class="header" :class="hasBack ? 'hasBack' : ''">
      <view class="white-bg" :style="{opacity: opacityVal}"></view>
      <view class="title" @click="onBackClick">
        <u-icon :color="isBlack ? '#333' : opacityVal === 0 ? '#fff' : '#333'" size="20" v-if="hasBack" name="arrow-left"></u-icon>
        <text :style="{color: isBlack ? '#333' : opacityVal === 0 ? '#fff' : '#333'}">{{title}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "m-navigat",
  props: {
    title: {
      type: String,
      required: true
    },
    hasBack: {
      type: Boolean,
      default: true
    },
    opacityVal: {
      type: Number,
      required: true
    },
    isBlack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    /**
     * 返回事件
     */
    onBackClick() {
      uni.navigateBack();
    }
  },
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
    background: url('@/static/image/common/page-bg.png') no-repeat;
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
    color: #333;
    padding: 94upx 24upx 0 24upx;
    box-sizing: border-box;
    opacity: var(--opacity);
    z-index: 9999;

    &.hasBack {
      justify-content:  flex-start;
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
    .title {
      display: flex;
      align-items: center;
      gap: 10upx;
    }
  }
}
</style>