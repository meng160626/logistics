<template>
  <view class="member">
    <m-navigat title="会员" :opacity="opac"></m-navigat>

    <view class="contet fl-cl">
      <!-- 用户信息 -->
      <view class="info fl-start">
        <image class="head" :src="getUrl('/user/user-head.png')" />
        <view class="fl-cl-center-start">
          <view class="fl-center">
            <text>王富贵</text>
            <image class="vip" :src="getUrl('/user/member-name.png')" />
          </view>
          <text class="save">累计已省874元</text>
        </view>
      </view>

      <view class="growth card">
        <card-title text="我的成长" url="growth-icon.png')" :width="24" :height="35"></card-title>

        <view class="line-box">
          <u-line-progress :height="10" :showText="false" inactiveColor="#fef4d4" :percentage="57">
            <slot>
              <view style="width: 100%;height: 100%;background: linear-gradient(90deg, #FFB200 0%, #FECC2A 100%);">
              </view>
            </slot>
          </u-line-progress>
          <view class="diggit"></view>
        </view>

        <view class="fl-between experience">
          <view class="today">
            <text>今日获得：</text>
            <text style="color: #333;">80</text>
            <image :src="getUrl('/user-pages/member/question-icon.png')" @click="show = true"></image>
          </view>
          <view class="fl-center total">
            <text style="color: #333;">2868</text>
            <text>/5000</text>
            <image :src="getUrl('/user-pages/member/wldr-icon.png')" class="vip ml-3"></image>
          </view>
        </view>
      </view>

      <!-- 我的权益 -->
      <view class="rights card">
        <view class="title fl-center">
          <image :src="getUrl('/user-pages/member/right-icon.png')"></image>
          <text>我的权益</text>
        </view>
        <view class="right-box">
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/tx-icon.png')"></image>
            <text>通行费<text class="gold">9.8折</text></text>
          </view>
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/jy-icon.png')"></image>
            <text>加油<text class="gold">9.8折</text></text>
          </view>
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/zs-icon.png')"></image>
            <text>住宿<text class="gold">9.8折</text></text>
          </view>
        </view>
        <view class="split fl-between">
          <text class="gold">下级解锁</text>
          <view class="split-line"></view>
        </view>
        <view class="right-box lock">
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/tx-icon.png')"></image>
            <image class="lock" :src="getUrl('/user-pages/member/lock-icon.png')"></image>
            <text>通行费<text class="gold">9.5折</text></text>
          </view>
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/jy-icon.png')"></image>
            <image class="lock" :src="getUrl('/user-pages/member/lock-icon.png')"></image>
            <text>加油<text class="gold">9.5折</text></text>
          </view>
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/zs-icon.png')"></image>
            <image class="lock" :src="getUrl('/user-pages/member/lock-icon.png')"></image>
            <text>住宿<text class="gold">9.5折</text></text>
          </view>
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/tx-icon.png')"></image>
            <image class="lock" :src="getUrl('/user-pages/member/lock-icon.png')"></image>
            <text>全天候通行</text>
          </view>
          <view class="fl-cl-center">
            <image :src="getUrl('/user-pages/member/cy-icon.png')"></image>
            <image class="lock" :src="getUrl('/user-pages/member/lock-icon.png')"></image>
            <text>餐饮优惠券5张</text>
          </view>
        </view>
      </view>

      <!-- 积分详情弹窗 -->
      <u-popup 
        :show="show" 
        border-radius="16" 
        :customStyle="{borderRadius: '8px'}" 
        :closeOnClickOverlay="true" 
        @close="show = false">
        <view class="panel-box">
          <card-title text="今日积分获得" url="integral-info.png" :width="31" :height="34" :noPadding="true"></card-title>
          <view>
            <view class="info-row">
              <text>签到</text>
              <text class="c-FB6530">+10</text>
            </view>
            <view class="info-row">
              <text>完成每日任务（1/5）</text>
              <text class="c-FB6530">+10</text>
            </view>
            <view class="info-row">
              <text>行驶里程（280）</text>
              <text class="c-FB6530">+205</text>
            </view>
            <view class="info-row">
              <text>服务区消费（280）</text>
              <text class="c-FB6530">+140</text>
            </view>
          </view>
        </view>
      </u-popup>
    </view>
  </view>
</template>

<script>
export default {
  name: "member",
  components: {},
  props: {},
  data() {
    return {
      show: false,
    }
  },
  methods: {}
} 
</script>

<style scoped lang="scss">
.contet {
  padding: 0 24upx;
  gap: 24upx;

  .info {
    gap: 24upx;
    font-size: 36upx;
    font-weight: bold;
    color: #FFFFFF;

    &>view {
      gap: 24upx;

      view {
        gap: 16upx;
      }
    }

    .head {
      width: 117upx;
      height: 117upx;
    }

    .vip {
      width: 150upx;
      height: 36upx;
    }

    .save {
      font-size: 28upx;
      font-weight: 400;
    }
  }

  .growth {
    .line-box {
      width: 644upx;
      margin: auto;
      position: relative;

      .diggit {
        width: 28upx;
        height: 28upx;
        background: #fad660;
        box-shadow: 0 3upx 6upx 1upx rgba(92, 92, 92, 0.1600);
        border-radius: 50%;
        position: absolute;
        top: -5upx;
        left: calc(57% - 14upx);
      }
    }

    .experience {
      padding: 20upx 36upx 24upx 36upx;
      color: #999;
      font-size: 28upx;

      .today {
        image {
          width: 30upx;
          height: 30upx;
          position: relative;
          top: 3upx;
          left: 12upx;
        }
      }

      .total {
        gap: 8upx;

        image {
          width: 150upx;
          height: 36upx;
        }
      }
    }
  }

  .rights {
    padding: 40upx 30upx;
    height: 831upx;
    width: 702upx;
    color: #000;

    view {
      z-index: 2;
      position: relative;
    }

    .title {
      color: #DCA54F;
      font-size: 34upx;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: bold;
      display: flex;
      justify-content: center;
      gap: 12upx;

      image {
        width: 38upx;
        height: 34upx;
      }
    }

    .right-box {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 52upx;
      margin-top: 30upx;

      &.lock {
        filter: opacity(50%);
      }

      view {
        gap: 20upx;

        .gold {
          color: #DCA54F;
        }
      }

      image {
        width: 110upx;
        height: 110upx;

        &.lock {
          width: 40upx;
          height: 40upx;
          position: absolute;
          bottom: 60upx;
          right: 40upx;
        }
      }
    }

    .split {
      margin-top: 40upx;
      color: #DCA54F;

      .split-line {
        width: 75%;
        height: 0;
        border-top: 1px solid #F2D59C;
      }
    }
  }

  /* 积分弹窗样式 */
  .panel-box {
    padding: 36rpx 24rpx;
    box-sizing: border-box;

    .info-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #141d28;
      font-size: 30rpx;
      padding: 18rpx 0;
      box-sizing: border-box;
    }
  }
}
</style>