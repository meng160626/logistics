<template>
  <view class="create-source fl-cl">
    <m-navigat title="创建货源" :opacity="opac"></m-navigat>

    <!-- 收发货信息 -->
    <select-address>
      <card-title 
        slot="title" 
        text="收发货信息" 
        url="address-icon.png"></card-title>
    </select-address>

    <!-- 货物信息 -->
    <goods-info></goods-info>
    
    <!-- 货源发布模式 -->
    <source-publish-model></source-publish-model>
    
    <!-- 其他信息 -->
    <other-info></other-info>

    <footer-btn-box :text="['保存', '下一步']" @click-second-btn="onNextStepClick"></footer-btn-box>
  </view>
</template>

<script>
import selectAddress from '@/components/custom-card/select-address/index.vue';
import goodsInfo from '@/components/custom-card/goods-info/index.vue';
import sourcePublishModel from '@/components/custom-card/source-publish-model/index.vue';
import otherInfo from '@/components/custom-card/other-info/index.vue';
import footerBtnBox from '@/components/footer-btn-box/index.vue';
export default {
  name: "create-source",
	components: {
		selectAddress,goodsInfo,sourcePublishModel,otherInfo,footerBtnBox
	},
  data() {
    return {}
  },
  computed: {},
  methods: {
    /**
     * 下一步
     */
    onNextStepClick() {
      uni.navigateTo({
        url: '/deliver-pages/choose-company/index'
      });
    }
  }
} 
</script>

<style scoped lang="scss">
.create-source {
	padding: 0 24upx 36upx 24upx;
  gap: 24upx;
}
</style>