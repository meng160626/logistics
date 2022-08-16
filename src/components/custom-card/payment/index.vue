<template>
  <view class="payment card">
    <card-title text="收款对象" url="pay-icon.png" :width="33" :height="34"></card-title>

    <u-cell-group :border="false">
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="货主名称">
        <text slot="value">{{payment.company}}</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="联系人">
        <text slot="value">{{payment.name}}</text>
      </u-cell>
      <u-cell :titleStyle="{color: '#999', fontSize: '28upx'}" :border="false" title="联系电话">
        <view slot="value" class="value">
          <text class="phone">{{formatPhone(payment.phone)}}</text>
        </view>
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  name: "payment",
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.phone {
  color: #FB6530;
}
</style>