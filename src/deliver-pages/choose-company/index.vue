<template>
  <view class="choose-company">
    <m-navigat title="选择承运商" :opacity="opac"></m-navigat>
    <view class="content">
      <u-cell-group :border="false">
        <u-cell v-for="(item, index) in list" :key="index" :title="item">
          <u-checkbox-group slot="right-icon">
            <u-checkbox shape="circle" activeColor="#ffcb2b"></u-checkbox>
          </u-checkbox-group>
        </u-cell>
      </u-cell-group>

      <footer-btn-box class="footer" :text="['保存', '下一步']" @click-second-btn="onNextStepClick"></footer-btn-box>
    </view>
  </view>
</template>

<script>
import footerBtnBox from '@/components/footer-btn-box/index.vue';
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "choose-company",
  components: {footerBtnBox},
  props: {},
  data() {
    return {
      list: ['星辰物流有限公司', '通达物流有限公司', '河北华讯物流有限公司']
    }
  },
  methods: {
    /**
     * 下一步
     */
    onNextStepClick() {
      uni.navigateTo({
        url: '/deliver-pages/allocate-company-goods/index'
      });
    }
  }
} 
</script>

<style lang="scss">
.choose-company {
  .content {
    background-color: #FFF;
    min-height: calc(100vh - 200upx);

    .footer {
      position: absolute;
      bottom: 36upx;
      left: 24upx;
    }
    .u-cell-group {
      padding: 0 36upx 24upx 36upx;
      .u-cell {
        .u-cell__body {
          padding: 10px 0;
        }
      }
    }
  }
}
</style>