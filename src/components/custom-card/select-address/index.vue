<template>
  <view class="select-address card">
    <slot name="title"></slot>
    <u-cell-group :border="false">
      <u-cell :border="false">
		    <view slot="title" class="title">
          <image slot="icon" src="@/static/image/common/sign-icon.png"></image>
          <text>{{signInfo.county ? signInfo.county : ''}}</text>
          <text :style="{fontSize: signInfo.street ? '14px' : '17px'}">{{signInfo.street ? signInfo.street : '请填写收货信息'}}</text>
        </view>
        <view slot="label" class="label" :class="signInfo.name ? '' : 'empty-label'">
          <text>{{signInfo.name ? signInfo.name : ''}}</text>
          <text>{{signInfo.phone ? formatPhone(signInfo.phone) : ''}}</text>
        </view>
		    <view slot="right-icon" class="right-icon" @click="onAddressBookBtnClick">
          <text>地址簿</text>
        </view>
      </u-cell>
      <view style="width: 591upx;height: 1px;background-color: #F0F0F0;margin: auto;"></view>
      <u-cell :border="false">
		    <view slot="title" class="title">
          <image slot="icon" src="@/static/image/common/pick-icon.png"></image>
          <text>{{pickInfo.county ? pickInfo.county : ''}}</text>
          <text :style="{fontSize: pickInfo.street ? '14px' : '17px'}">{{pickInfo.street ? pickInfo.street : '请填写收货信息'}}</text>
        </view>
        <view slot="label" class="label" :class="pickInfo.name ? '' : 'empty-label'">
          <text>{{pickInfo.name ? pickInfo.name : ''}}</text>
          <text>{{pickInfo.phone ? formatPhone(pickInfo.phone) : ''}}</text>
        </view>
		    <view slot="right-icon" class="right-icon" @click="onAddressBookBtnClick">
          <text>地址簿</text>
        </view>
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
import { U } from 'caniuse-lite/data/browserVersions';

export default {
  name: "select-address",
  data() {
    return {
      signInfo: {     // 发货信息
        county: '易县',
        street: '东关十字路口',
        name: '张三',
        phone: '16888888888'
      },
      pickInfo: {     // 收货信息
      },
    }
  },
  methods: {
    /**
     * 跳转地址簿
     */
    onAddressBookBtnClick() {
      uni.navigateTo({
        url: '/deliver-pages/address-book/index'
      });
    }
  }
}
</script>

<style scoped lang="scss">
image {
  width: 34upx;
  height: 34upx;
  position: relative;
  top: 5upx;
}
.select-address {

  .title {
    font-size: 28upx;

    text:nth-child(2) {
      font-size: 34upx;
      font-weight: bold;
      color: #333333;
      display: inline-block;
      margin: 0 20upx;
    }
    text:last-child {
      color: #999;
      font-weight: 400;
    }

  }
  .label {
    padding: 26upx 0 0 56upx;
    color: #666666;
    
    &.empty-label {
    padding: 0;
    }
    text:last-child {
      display: inline-block;
      margin-left: 20upx;
    }
  }
  .right-icon {
      font-weight: bold;
      color: #FB6530;
      border-left: 1px solid #F0F0F0;
      padding-left: 20upx;
  }
}
</style>