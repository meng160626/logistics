<template>
  <view class="goods-info card">
    <card-title 
      text="货物信息" 
      url="goods-info-icon.png" 
      :width="34">
    </card-title>
    <view class="box">
      <u-cell-group :border="false">
        <u-cell 
          title="货品" 
          :titleStyle="titleStyle"
          :isLink="true"
          @click="onSelectGoodsBtnClick">
          <view slot="value" class="value">
            <text>请选择货品</text>
          </view>
          <view slot="right-icon" class="right-icon fl-center">
            <u-icon name="arrow-right" color="#909399"></u-icon>
            <text class="new">新货品</text>
          </view>
        </u-cell>
        <u-cell 
          title="货物单位" 
          :border="false"
          :titleStyle="titleStyle"
          :isLink="true">
          <view slot="value" class="value">
            <text>请选择单位</text>
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
  name: "goods-info",
  data() {
    return {
      titleStyle: {
        color: '#666'
      }
    }
  },
  methods: {
    /**
     * 选择货品
     */
    onSelectGoodsBtnClick() {
      uni.navigateTo({
        url: '/deliver-pages/select-goods/index'
      });
    }
  }
}
</script>

<style lang="scss">
.goods-info {
  .box {
    .value {
      color: #999999;
      position: absolute;
      left: 45%;
      transform: translateX(-50%);
    }
    .right-icon {
      gap: 36upx;
      .new {
        font-size: 28upx;
        font-weight: 500;
        color: #FB6530;
      }
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