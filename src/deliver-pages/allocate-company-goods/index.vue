<template>
  <view class="allocate-company-goods">
    <m-navigat title="分配承运商货物" :opacityVal="opacity"></m-navigat>

    <view class="list fl-cl">
      <allocate 
        v-for="(item, index) in list"
        :key="index"
        :title="item"
        @create="onCreateClick"
        @delete="onDelete(index)">
      </allocate>
    </view>

    <footer-btn-box class="footer" :text="['保存', '下一步']" @click-second-btn="onNextStepClick"></footer-btn-box>
  </view>
</template>

<script>
import footerBtnBox from '@/components/footer-btn-box/index.vue';
import allocate from '@/components/custom-card/allocate/index.vue';
export default {
  name: "allocate-company-goods",
  components: {allocate,footerBtnBox},
  props: {},
  data() {
    return {
      list: ['星辰物流有限公司', '唐山建国货运仓储物流有限公司'],
    }
  },
  computed: {},
  methods: {
    /**
     * 删除事件
     */
    onDelete(idx) {
      this.list.splice(idx, 1);
    },
    /**
     * 新建
     */
    onCreateClick() {
      uni.navigateTo({
        url: '/deliver-pages/create-contacts/index'
      });
    },
    /**
     * 下一步
     */
    onNextStepClick() {
      uni.navigateTo({
        url: '/deliver-pages/allocate-contend-goods/index'
      });
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
} 
</script>

<style scoped lang="scss">
.allocate-company-goods {
  .list {
    padding: 0 24upx;
    gap: 24upx;
  }
  .footer {
    position: absolute;
    bottom: 34upx;
    left: 24upx;
  }
}
</style>