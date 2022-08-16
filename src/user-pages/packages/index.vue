<template>
  <view class="packages">
    <m-navigat title="我的钱包" :isBlack="true">
      <view class="bg" slot="bg"></view>
    </m-navigat>

    <view class="content">
      <view class="wallet">
        <image src="@/user-pages/static/image/package/package-bg.png" class="wallet-bg" />
        <view class="money fl-cl-center-start">
          <text>钱包余额（元）</text>
          <text style="font-size: 60upx; font-weight: bold;">8121.48</text>
        </view>

        <view class="btn-box fl-center">
          <view class="btn fl-center">
            <image style="width: 36upx;height: 31upx" src="@/user-pages/static/image/package/package-icon.png" />
            <text>提现</text>
          </view>
          <view class="btn fl-center">
            <image style="width: 34upx;height: 34upx" src="@/user-pages/static/image/package/money-icon.png" />
            <text>充值</text>
          </view>
        </view>

        <view class="bill-btn fl-center">
          <text>账单</text>
          <u-icon color="#FFF" name="arrow-right"></u-icon>
        </view>
      </view>

      <view class="bill-content">
        <card-title text="待收款项" url="bill-icon.png" :no-padding="true">
          <view class="type-btn fl-center">
            <text>全部</text>
            <u-icon color="#999999" name="arrow-down"></u-icon>
          </view>
        </card-title>

        <scroll-view scroll-y class="list">
          <view class="fl-cl list-content">
            <fund 
              class="fund" 
              v-for="(item, index) in list" 
              :key="index" 
              :fund="item">
            </fund>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import fund from "@/components/custom-card/fund/index.vue";
export default {
  name: "packages",
  components: {fund},
  props: {},
  data() {
    return {
      list: [
        {
          isDone: false,
          id: 'YSDD202207040928280001',
          money: 5000.22
        },
        {
          isDone: true,
          id: 'YSDD202207040928280002',
          money: 16748
        },
        {
          isDone: false,
          id: 'YSDD202207040928280003',
          money: 6720.93
        },
        {
          isDone: true,
          id: 'YSDD202207040928280004',
          money: 8870.1
        }
      ]
    }
  },
  methods: {}
} 
</script>

<style scoped lang="scss">
.bg {
  background: linear-gradient(90deg, #E8F0FF 0%, #FFFFFF 89%, #FFF5E6 100%);
  width: 750upx;
  height: 440upx;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.content {
  padding: 0 24upx 24upx 24upx;

  .wallet {
    // background: url('@/user-pages/static/image/package/package-bg.png') no-repeat;
    // background-size: 100% 100%;
    width: 702upx;
    height: 330upx;
    position: relative;
    border-radius: 16upx;
    overflow: hidden;

    .wallet-bg {
      width: 702upx;
      height: 330upx;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .money {
      color: #FFF;
      position: absolute;
      top: 46upx;
      left: 34upx;
      font-size: 28upx;
      gap: 16upx;
    }
    .btn-box {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #FFF;
      font-size: 32upx;
      width: 100%;
      height: 95upx;

      view {
        gap: 16upx;
        width: 50%;
        height: 36upx;

        & + view {
          border-left: 1upx solid #FFFFFF;
        }
      }
    }
    .bill-btn {
      width: 132upx;
      height: 68upx;
      position: absolute;
      top: 30upx;
      right: -1upx;
      border-radius: 40upx 0 0 40upx;
      background-color: rgba(91, 141, 240, .6);
      gap: 8upx;
      border: 1px solid rgba(255, 255, 255, .6);
      font-size: 28upx;
      color: #FFF;
      backdrop-filter: blur(4upx);
      
      text {
        position: relative;
        left: 4upx;
        bottom: 2upx;
      }
    }
  }
  .bill-content {
    .type-btn {
      gap: 8upx;

      text {
        color: #999999;
        font-size: 26upx;
        font-weight: 400;
      }
    }
    .list .list-content {
      height: calc(100vh - 200upx - 330upx - 54upx - 80upx);
      gap: 24upx;
    }
  }
}
</style>