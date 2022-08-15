<template>
  <view class="address-info card fl-cl">
    <view class="fl-between">
      <text>地点</text>
      <text>
        {{value.address}}
        <text class="phone" v-if="value.isDefault">(默认地址)</text>
      </text>
    </view>
    <view class="fl-between">
      <text>详细地址</text>
      <text>{{value.details}}</text>
    </view>
    <view class="fl-between">
      <text>联系人</text>
      <text>
        <text>{{value.name}}</text>
        <text class="phone">{{formatPhone(value.phone)}}</text>
      </text>
    </view>
    <view class="check-box fl-between">
      <u-checkbox-group>
        <u-checkbox shape="circle" activeColor="#fb652e" label="设为默认地址"></u-checkbox>
      </u-checkbox-group>
      <view class="btn">编辑地址</view>
      <view class="btn">选择地址</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "address-info",
  props: {
    value: {
      type: Object
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
.address-info {
  padding: 30upx;
  gap: 24upx;
  font-size: 28upx;

  view {
    & > text:nth-child(1) {
      color: #999;
    }
    & > text:nth-child(2) {
      color: #333;
    }
    .phone {
      display: inline-block;
      margin-left: 0.5em;
      color: #FB6530;
    }
  }
  .btn {
    text-align: center;
    border-radius: 30upx;
    font-size: 28upx;
    color: #530C00;
  }
  .btn:nth-child(2) {
    width: 182upx;
    height: 56upx;
    background: #FFFFFF;
    border: 2upx solid #FECC2A;
    line-height: 56upx;
  }
  .btn:nth-child(3) {
    width: 186upx;
    height: 60upx;
    background: #FECC2A;
    line-height: 60upx;
  }
}
</style>