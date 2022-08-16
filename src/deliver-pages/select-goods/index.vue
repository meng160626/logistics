<template>
  <view class="select-goods">
    <m-navigat title="选择货品" :opacity="opac"></m-navigat>

    <view class="content fl-cl">
      <ipt-box @change="change"></ipt-box>
      <goods v-for="(item, index) in list" :key="index" :product="item"></goods>
      <text class="in-mg-center" style="color: #999999;" @click="onCreateGoodsBtnClick">
        找不到货品？
        <text style="color: #FB6530;">点击这里新建货品</text>
      </text>
    </view>
  </view>
</template>

<script>
import goods from "@/components/custom-card/goods/index.vue";
export default {
  name: "select-goods",
  components: {goods},
  props: {},
  data() {
    return {
      keyword: '',
      list: [
        {
          class: '钢材',
          name: '螺纹钢',
          unit: ['吨', '件']
        },
        {
          class: '蔬菜',
          name: '土豆',
          unit: ['吨', '箱']
        },
        {
          class: '煤炭',
          name: '焦炭',
          unit: ['吨', '方']
        }
      ],
    }
  },
  methods: {
    /**
     * 关键词变化事件
     */
    change(e) {
      this.keyword = e;
    },
    /**
     * 创建货品
     */
    onCreateGoodsBtnClick() {
      uni.navigateTo({
        url: '/deliver-pages/create-goods/index'
      });
    }
  }
} 
</script>

<style scoped lang="scss">

.content {
  padding: 0 24upx;
  gap: 24upx;
}
</style>