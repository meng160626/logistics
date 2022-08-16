<template>
  <view class="fund card" @click="onFundDetailsBtnClick">
    <u-cell-group :border="false">
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="运输订单运费">
        <view slot="value" class="fl-center value">
          <text :class="fund.isDone ? 'done' : 'undone'">{{fund.isDone ? '已收款' : '待收款'}}</text>
          <u-icon name="arrow-right" color="#999"></u-icon>
        </view>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="订单编号" :value="fund.id"></u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="应收金额">
        <view slot="value" class="fl-center value">
          <text class="money">{{formatMoney(fund.money)}}元</text>
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
  name: "fund",
  props: {
    fund: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    /**
     * 跳转款项明细
     */
    onFundDetailsBtnClick() {
      uni.navigateTo({
        url: '/user-pages/fund-details/index'
      });
    }
  }
}
 
</script>

<style lang="scss">
.fund {
  .value {
    gap: 8upx;
    font-size: 26upx;

    .done {
      color: #6CE0B3;
    }
    .undone {
      color: #FF605C;
    }
    .money {
      color: #FB6530;
      font-size: 28upx;
      font-weight: bold;
    }
  }
  .u-cell-group {
      padding: 5px 12px;
    .u-cell {
      .u-cell__body {
        padding: 3px 0;
      }
    }
  }
}
</style>