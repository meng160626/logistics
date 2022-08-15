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
    </view>
  </view>
</template>

<script>
export default {
  name: "deliver-info",
  props: {},
  data() {
    return {
      name: '',
      phone: '',
    }
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
}
</style>