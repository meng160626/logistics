<template>
  <view class="other-info card">
    <card-title 
      text="其他信息" 
      url="other-icon.png" 
      :width="33"
      :height="33">
    </card-title>
    <view class="box">
      <u-cell-group :border="false">
        <u-cell 
          title="允许损耗" 
          :titleStyle="titleStyle"
          :isLink="false">
          <view slot="value" class="value">
            <text>选填</text>
          </view>
          <view slot="right-icon" class="right-icon fl-center">
            ‰
            <u-icon name="arrow-right" size="16"></u-icon>
          </view>
        </u-cell>
        <u-cell 
          title="货品价值" 
          :titleStyle="titleStyle"
          :isLink="false">
          <view slot="value" class="value">
            <text>选填</text>
          </view>
          <view slot="right-icon">
            元
          </view>
        </u-cell>
        <u-cell 
          title="备注信息" 
          :titleStyle="titleStyle"
          :border="false"
          :isLink="false">
          <view slot="value" class="value">
            <text>请填写备注信息（200字以内）</text>
          </view>
        </u-cell>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "other-info",
  data() {
    return {
      titleStyle: {
        color: '#666'
      }
    }
  }
}
</script>

<style lang="scss">
.other-info {
  .box {

    .right-icon {
      gap: 12upx;
      font-size: 24upx;
    }
    .value {
      font-size: 24upx;
      width: 350upx;
      position: absolute;
      left: 180upx;
      color: #999999;
    }
  }
  .u-cell-group {
    padding: 0 36upx 24upx 36upx;
    .u-cell {
      .u-cell__body {
        padding: 10px 0;
      }
    }
  }
}
</style>