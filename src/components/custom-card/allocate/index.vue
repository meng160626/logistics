<template>
  <view class="allocate card">
    <card-title :text="title">
      <image 
        class="icon" 
        :src="getUrl('/common/rubbish-icon.png')" 
        @click="onDeleteClick" />
    </card-title>

    <view class="cell">
      <u-cell-group :border="false">
        <u-cell :center="true" title="分配数量" :isLink="false">
          <view slot="value" class="ipt-box">
            <u--input
              fontSize="24rpx"
              placeholder="请输入数量"
              border="none"
              clearable
            ></u--input>
          </view>
          <text slot="right-icon">吨</text>
        </u-cell>
        <u-cell :center="true" title="运输单价" :isLink="false">
          <view slot="value" class="ipt-box">
            <u--input
              fontSize="24rpx"
              placeholder="请输入单价"
              border="none"
              clearable
            ></u--input>
          </view>
          <text slot="right-icon">元/吨</text>
        </u-cell>
        <u-cell :center="true" title="预估总价" :isLink="false">
          <view slot="value" class="ipt-box">
            <u--input
              fontSize="24rpx"
              placeholder="请输入总价"
              border="none"
              clearable
            ></u--input>
          </view>
          <text slot="right-icon">元</text>
        </u-cell>
        <u-cell :center="true" title="联系人" :isLink="false">
          <view slot="value" class="value-box fl-between">
            <text>
              <text>张三</text>
              <text class="phone">{{formatPhone('19858945874')}}</text>
            </text>
            <u-icon name="arrow-right" size="14"></u-icon>
          </view>
          <text slot="right-icon" class="right-icon" @click="onCreateBtnClick">新建</text>
        </u-cell>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared'
  },
  name: "allocate",
  comments: {},
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {
    /**
     * 删除图片点击事件
     */
    onDeleteClick() {
      this.$emit('delete');
    },
    /**
     * 新建点击事件
     */
    onCreateBtnClick() {
      this.$emit('create');
    }
  }
}
 
</script>

<style lang="scss">
.allocate {
  .icon {
    width: 30upx;
    height: 33upx;
  }
  .cell {

    .ipt-box {
      position: absolute;
      left: 200upx;
    }
    .value-box {
      position: absolute;
      left: 200upx;
      font-size: 24upx;
      width: 300upx;
      .phone {
        margin-left: 12upx;
        color: #FB6530;
      }
    }
    .right-icon {
        font-size: 28upx;
        font-weight: 500;
        color: #FB6530;
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