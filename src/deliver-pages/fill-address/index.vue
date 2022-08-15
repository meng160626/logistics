<template>
  <view class="fill-address">
    <m-navigat title="地址信息填写" :opacityVal="opacity"></m-navigat>

    <map></map>
    <view class="content fl-cl">
      <deliver-info></deliver-info>
      <custom-ipt-box placeholder="请输入详细地址"></custom-ipt-box>
    </view>
  </view>
</template>

<script>
import deliverInfo from "@/components/custom-card/deliver-info/index";
import customIptBox from "@/components/custom-ipt-box/index";
export default {
  name: "fill-address",
  components: {deliverInfo,customIptBox},
  props: {},
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style scoped lang="scss">
map {
  width: 750upx;
  height: calc(100vh - 200upx);
}
.content {
  width: 702upx;
  position: absolute;
  top: 227upx;
  left: 24upx;
  gap: 40upx;
}
</style>
