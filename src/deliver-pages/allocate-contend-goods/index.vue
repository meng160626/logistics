<template>
  <view class="allocate-contend-goods">
    <m-navigat title="分配竞价货物" :opacity="opac"></m-navigat>

    <view class="content">
      <card-title 
        text="承运商竞价" 
        url="contend-icon.png" 
        :width="30">
      </card-title>
      
      <u-cell-group :border="false">
        <u-cell title="货物数量">
          <view class="ipt-box" slot="value">
            <u--input
              fontSize="24rpx"
              placeholder="请输入数量"
              border="none"
              clearable
            ></u--input>
          </view>
          <text slot="right-icon">吨</text>
        </u-cell>
        <u-cell title="参考单价">
          <view class="ipt-box" slot="value">
            <u--input
              fontSize="24rpx"
              placeholder="请输入单价"
              border="none"
              clearable
            ></u--input>
          </view>
          <text slot="right-icon">元/吨</text>
        </u-cell>
        <u-cell title="预估总价">
          <view class="ipt-box" slot="value">
            <u--input
              fontSize="24rpx"
              placeholder="请输入总价"
              border="none"
              clearable
            ></u--input>
          </view>
          <text slot="right-icon">元</text>
        </u-cell>
      </u-cell-group>

      <footer-btn-box class="footer" :text="['保存', '保存并发布']"></footer-btn-box>
    </view>
  </view>
</template>

<script>
import footerBtnBox from '@/components/footer-btn-box/index.vue';
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "create-contacts",
  components: {footerBtnBox},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
} 
</script>

<style lang="scss">
.allocate-contend-goods {
  .content {
    background-color: #FFF;
    min-height: calc(100vh - 200upx);

    .ipt-box {
      position: absolute;
      left: 200upx;
    }
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