<template>
  <view class="source-publish-model card">
    <card-title 
      text="货源发布模式" 
      url="publish-icon.png" 
      :width="30"
      :height="35">
    </card-title>
    <view class="box">
      <u-cell-group :border="false">
        <u-cell 
          title="业务模式" 
          :titleStyle="titleStyle"
          :isLink="true">
          <view slot="value" class="value">
            <text>委托承运商运输</text>
          </view>
        </u-cell>
        <u-cell 
          title="发布模式" 
          :titleStyle="titleStyle"
          :isLink="true">
          <view slot="value" class="value">
            <text>自选承运商</text>
          </view>
        </u-cell>
        <u-cell 
          title="是否包含服务费" 
          :titleStyle="titleStyle"
          :isLink="true">
          <view slot="value" class="value">
            <text>不含服务费</text>
          </view>
        </u-cell>
        <u-cell 
          title="是否显示运输单价" 
          :titleStyle="titleStyle"
          :isLink="true">
          <view slot="value" class="value">
            <text>显示</text>
          </view>
        </u-cell>
      </u-cell-group>
    </view>
    <view class="check-box">
      <u-checkbox-group>
        <u-checkbox shape="circle" activeColor="#fb652e" label="已阅读并同意货运委托运输合同"></u-checkbox>
      </u-checkbox-group>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "source-publish-model",
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
.source-publish-model {
  .box {
    .value {
      position: relative;
      left: -60upx;
    }
    .u-cell-group {
      padding: 0 36upx;
      .u-cell {
        .u-cell__body {
          padding: 10px 0;
        }
      }
    }
  }
  .check-box {
    padding: 30upx 30upx 34upx 30upx;
  }
}
</style>