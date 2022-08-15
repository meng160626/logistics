<template>
  <view class="goods card">
    <u-cell-group :border="false">
      <u-cell 
        title="类目 | 名称" 
        :link="false"
        :titleStyle="{color: '#999'}">
        <text slot="value" style="color: #333;">{{product.class + ' | ' + product.name}}</text>
      </u-cell>
      <u-cell 
        title="单位" 
        :link="false"
        :titleStyle="{color: '#999'}">
        <text slot="value" style="color: #333;">{{unit}}</text>
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  name: "goods",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      unit: ''
    }
  },
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {
    this.product.unit.forEach(item => {
      this.unit = this.unit + item + '; ';
    });
    if (this.unit.length > 0) {
      this.unit.substring(0, this.unit.length - 1);
    }
  }
}
 
</script>

<style scoped></style>