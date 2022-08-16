<template>
  <view class="allocate-company-goods">
    <m-navigat title="分配承运商货物" :opacity="opac"></m-navigat>

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
        url: '/deliver-pages/allocate-platform-goods/index'
      });
    }
  }
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