<template>
  <view class="transportation card">
    <card-title text="运输信息" url="car-icon.png" :width="40" :height="33"></card-title>
  
    <u-cell-group :border="false">
      <u-cell :border="true">
        <view slot="title" class="fl-cl title">
          <text>钢材 | 螺纹钢</text>
          <text>陕钢 | Φ12 | 9m</text>
        </view>
        <text slot="value">22吨</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="true" title="运输车次">
        <text slot="value">4次</text>
      </u-cell>
      <u-cell :border="false" title="货损">
        <view slot="title" class="title fl-cl">
          <text>实装</text>
          <text>实收</text>
          <text>货损</text>
        </view>
        <view slot="value" class="value fl-cl">
          <text>21.88吨</text>
          <text>21.80吨</text>
          <text>0.08吨</text>
        </view>
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "transportation",
  props: {},
  data() {
    return {}
  },
  methods: {}
}
 
</script>

<style lang="scss">
.transportation {
  .u-cell-group {
    padding: 0 36upx 24upx 36upx;
    .u-cell {
      .u-cell__body {
        padding: 10px 0;
      }
    }
  }
  .title {
    font-size: 28upx;
    color: #999;
    gap: 26upx;
  }
  .value {
    gap: 26upx;
  }
}
</style>