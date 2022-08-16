<template>
  <view class="deliver-info card">
    <card-title 
      text="发货信息" 
      url="deliver-icon.png">
    </card-title>
    <u-cell-group :border="false">
      <u-cell 
        title="联系人姓名" 
        :titleStyle="{color: '#666666'}">
        <view slot="value" class="ipt-box">
          <u--input
            fontSize="24rpx"
            placeholder="请输入姓名"
            :border="false"
            v-model="name"
          ></u--input>
        </view>
      </u-cell>
      <u-cell 
        title="联系人电话" 
        :titleStyle="{color: '#666666'}">
        <view slot="value" class="ipt-box">
          <u--input
            fontSize="24rpx"
            placeholder="请输入电话"
            :border="false"
            v-model="phone"
          ></u--input>
        </view>
      </u-cell>
      <u-cell 
        title="省-市-区(县)" 
        :isLink="true" 
        :titleStyle="{color: '#666666'}">
        <view slot="value" class="value-box">
          <text>请选择省-市-区(县)</text>
        </view>
      </u-cell>
    </u-cell-group>
    <view class="check-box">
      <u-checkbox-group>
        <u-checkbox shape="circle" activeColor="#fb652e" label="保存到电话簿"></u-checkbox>
      </u-checkbox-group>
      <u-checkbox-group>
        <u-checkbox shape="circle" activeColor="#fb652e" label="保存到电话簿"></u-checkbox>
      </u-checkbox-group>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "deliver-info",
  props: {},
  data() {
    return {
      name: '',
      phone: '',
    }
  }
}
</script>

<style lang="scss">
.deliver-info {
  .value-box {
    position: absolute;
    left: 220upx;
    font-size: 24upx;
    width: 300upx;
  }
  .ipt-box {
    position: absolute;
    left: 200upx;
  }
  .check-box {
    padding: 30upx 30upx 34upx 30upx;
    display: flex;
    gap: 36upx;
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
</style>