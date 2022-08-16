<template>
  <view class="create-contacts">
    <m-navigat title="新建联系人" :opacityVal="opacity"></m-navigat>

    <view class="content">
      <u-cell-group :border="false">
        <u-cell title="联系人名称">
          <view class="ipt-box" slot="value">
            <u--input
              fontSize="24rpx"
              placeholder="请输入名称"
              border="none"
              clearable
            ></u--input>
          </view>
        </u-cell>
        <u-cell title="联系人电话">
          <view class="ipt-box" slot="value">
            <u--input
              fontSize="24rpx"
              placeholder="请输入电话"
              border="none"
              clearable
            ></u--input>
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

<style lang="scss">
.create-contacts {
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