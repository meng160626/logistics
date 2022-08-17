<template>
  <view class="card-title fl-between" :class="noPadding ? 'no-padding' : ''">
    <view class="left fl-start">
      <image 
        v-if="url"
        :style="{width: width + 'rpx', height: height + 'rpx'}" 
        :src="getUrl('/common/' + url)" />
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
    },
    noPadding: {
      type: Boolean,
      default: false
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

  &.no-padding {
    padding: 30upx 0 24upx 0;
  }
  .left {
    gap: 12upx;
  }
}
</style>