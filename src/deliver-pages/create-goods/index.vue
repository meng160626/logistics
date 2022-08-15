<template>
  <view class="create-goods">
    <m-navigat title="新建货品" :opacityVal="opacity"></m-navigat>
    <view class="content">
      <u-cell-group :border="false">
        <u-cell title="货品名称">
          <view class="ipt-box" slot="value">
            <u--input
              fontSize="24rpx"
              placeholder="请输入货品名称"
              border="none"
              clearable
            ></u--input>
          </view>
        </u-cell>
        <u-cell title="货品类目" :isLink="true">
          <view class="value-box" slot="value">
            <text>请选择货品类目</text>
          </view>
        </u-cell>
        <u-cell title="计量单位" :isLink="true">
          <view class="value-box" slot="value">
            <text>请选择计量单位</text>
          </view>
        </u-cell>
      </u-cell-group>

      <footer-btn-box class="footer" :text="['提交']" @click-first-btn="onSubmitClick"></footer-btn-box>
    </view>
  </view>
</template>

<script>
import footerBtnBox from '@/components/footer-btn-box/index.vue';
export default {
  name: "create-goods",
  components: {footerBtnBox},
  props: {},
  data() {
    return {}
  },
  methods: {
    /**
     * 提交
     */
    onSubmitClick() {
      uni.navigateBack();
    }
  }
} 
</script>

<style scoped lang="scss">
.content {
  background-color: #FFF;
  min-height: calc(100vh - 200upx);

  .ipt-box {
    position: absolute;
    left: 200upx;
  }
  .value-box {
    font-size: 24rpx;
    color: #c0c4cc;
    position: absolute;
    left: 200upx;
  }
  .footer {
    position: absolute;
    bottom: 36upx;
    left: 24upx;
  }
}
</style>