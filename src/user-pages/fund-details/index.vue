<template>
  <view class="fund-details">
    <m-navigat title="款项明细" :opacity="opac"></m-navigat>
    
    <view class="content fl-cl">
      <payment :payment="payment"></payment>
      <transportation></transportation>
      <freight :freight="freight"></freight>
    </view>
  </view>
</template>

<script>
import payment from "@/components/custom-card/payment/index.vue";
import freight from "@/components/custom-card/freight/index.vue";
import transportation from "@/components/custom-card/transportation/index.vue";
export default {
  components: {payment,freight,transportation},
  props: {},
  data() {
    return {
      payment: {
        company: '通达物流有限责任公司',
        name: '张晓三',
        phone: '18889758756'
      },
      freight: {
        unit: '￥40吨/公里',
        receivable: 4000,
        practical: 0,
        damage: 100,
        due: 3900
      }
    }
  },
  methods: {}
} 
</script>

<style scoped lang="scss">
.content {
  padding: 0 24upx 24upx 24upx;
  gap: 24upx;
}
</style>