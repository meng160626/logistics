<template>
  <view class="freight card">
    <card-title text="运费信息" url="currency-icon.png" :width="33" :height="33"></card-title>

    <u-cell-group :border="false">
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="运费单价">
        <text slot="value">{{freight.unit}}</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="应收运费">
        <text slot="value" class="money">￥{{formatMoney(freight.receivable)}}</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="实收金额">
        <text slot="value" class="money">￥{{formatMoney(freight.practical)}}</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="货损赔付">
        <text slot="value" class="money">￥{{formatMoney(freight.damage)}}</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="待收款金额">
        <text slot="value" class="money">￥{{formatMoney(freight.due)}}</text>
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  name: "freight",
  props: {
    freight: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
 
</script>

<style scoped lang="scss">
.money {
  font-size: 28upx;
  font-weight: bold;
  color: #FB6530;
}
</style>