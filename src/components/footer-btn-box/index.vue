<template>
  <view class="footer-btn-box fl-center">
    <view 
      :class="only ? 'only' : ''" 
      v-for="(item, index) in text" 
      :key="index"
      @click="click(index)"
    >{{item}}</view>
  </view>
</template>

<script>
export default {
  name: "footer-btn-box",
  props: {
    text: {
      type: Array
    }
  },
  data() {
    return {
      only: false
    }
  },
  computed: {},
  methods: {
    click(index) {
      if (index === 0) {
        this.$emit('clickFirstBtn');
      } else {
        this.$emit('clickSecondBtn');
      }
    }
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {
    if (this.text.length === 1) {
      this.only = true;
    }
  },
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
}
</script>

<style scoped lang="scss">
.footer-btn-box {
  gap: 22upx;

  view:first-child {
    line-height: 82upx;
    width: 332upx;
    height: 82upx;
    border: 4upx solid #FECC2A;
    color: #530C00;
  }
  view:last-child {
    line-height: 90upx;
    width: 340upx;
    height: 90upx;
    background: linear-gradient(96deg, #FFE03E 0%, #FF9A16 100%);
    color: #FFF;
  }
  view {
    border-radius: 50upx;
    font-size: 34upx;
    text-align: center;

    &.only {
      width: 702upx;
      height: 90upx;
      border: none;
    }
  }
}
</style>