<template>
  <view class="card-title fl-between">
    <view class="left fl-start">
      <image 
        v-if="url"
        :style="{width: width + 'rpx', height: height + 'rpx'}" 
        :src="'../../static/image/common/' + url" />
      <text>{{text}}</text>
    </view>
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "card-title",
  props: {
    text: {
      type: String
    },
    url: {
      type: String
    },
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    }
  }
}
</script>

<style scoped lang="scss">
.card-title {
  padding: 30upx 36upx 24upx 36upx;
  font-size: 34upx;
  font-weight: bold;
  color: #333333;
  width: 100%;
  box-sizing: border-box;

  .left {
    gap: 12upx;
  }
}
</style>