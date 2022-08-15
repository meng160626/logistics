<template>
  <view class="address-book">
    <m-navigat title="地址簿" opacityVal="opacity"></m-navigat>
    
    <view class="content fl-cl">
      <u-tabs
        :list="tabList"
        :scrollable="false"
        lineColor="#FECC2A"
        lineWidth="24rpx"
        lineHeight="8rpx"
        :inactiveStyle="{
          fontSize: '32rpx',
          color: '#E1EEFF'
        }"
        :activeStyle="{
          fontSize: '36rpx',
          color: '#FFF',
          fontWeight: 'bold'
        }"
        :current="current"
        @change="change"
      >
      </u-tabs>
      <ipt-box></ipt-box>
      <addressInfo v-for="(item, index) in list" :key="index" :value="item"></addressInfo>
      <view class="footer">
        <text>找不到地址信息？</text>
        <text class="new" @click="onCreateAddressBtnClick">点击这里新建发货地址</text>
      </view>
    </view>
  </view>
</template>

<script>
import addressInfo from '@/components/custom-card/address-info/index.vue';
export default {
  name: "address-book",
  components: {addressInfo},
  props: {},
  data() {
    return {
      tabList: [
        {
          name: "发货地址"
        },
        {
          name: "收货地址"
        }
      ],
      current: 1,
      list: [
        {
          address: '九江石材',
          details: '河北省保定市易县九江石材(同兴东路南)',
          name: '张三',
          phone: '19858945874'
        }
      ],
    }
  },
  methods: {
    /**
     * tab切换事件
     */
    change() {

    },
    /**
     * 
     */
    onCreateAddressBtnClick() {
      uni.navigateTo({
        url: '/deliver-pages/fill-address/index'
      });
    }
  }
} 
</script>

<style scoped lang="scss">
.content {
  padding: 0 24upx;
  gap: 24upx;

  .footer {
    font-size: 28upx;
    color: #999999;
    text-align: center;
  }
  .new {
    color: #FB6530;
  }
}
</style>