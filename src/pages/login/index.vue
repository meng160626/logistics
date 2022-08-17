<template>
  <view class="login">
    <m-navigat title="登录/注册" :opacity="opac"></m-navigat>
    <view class="main">
      <view class="image-box fl-center">
        <image
          class="logo"
          :src="getUrl('/common/logo.png')"
          mode="aspectFit"
        />
      </view>
      <view class="btn" @click="onLogin">
        同意协议并使用账号一键登录
        <view class="mask" v-show="!isAgree"></view>
      </view>

      <view class="quit">取消登录</view>
      
      <view class="protocol fl-center">
        <view
          class="icon"
          :class="isAgree ? 'active' : ''"
          @click="isAgree = !isAgree"
        ></view>
        <view class="text">
          首次登录自动注册河北高速物流网络货运平台账号，且已阅读并同意
          <text class="file">
            《用户服务协议》
          </text>
          <text class="file">
            《隐私政策》
          </text>
          <text class="file">
            《法律声明》
          </text>
        </view>
      </view>
    </view>
    <!-- 提示 -->
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { requestPost } from '../../static/js/request';

export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      tipsShow: false, // 提示弹窗
      isAgree: false
    };
  },
  methods: {
    /**
     * 登录 jscode-> (openid,sesionkey) -> 获取授权 ->accessToken
     */
    onLogin() {
      uni.showLoading({
        title: "登录中···",
        mask: true,
      });
      requestPost({
        url: '/users/login',
        success: (res) => {
          if (res.data) {
            this.$store.commit('login');
            uni.navigateBack();
          }
        }
      });
    },
  }
};
</script>

<style scoped lang="scss">
.login {
  .main {
    height: calc(100vh - 200upx);
    background: #FFFFFF;
    padding: 0 24upx;
    position: relative;
    .image-box {
      padding-top: 74upx;
      padding-bottom: 70upx;
      .logo {
        width: 470upx;
        height: 426upx;
      }
    }
    .btn {
      width: 702upx;
      text-align: center;
      height: 90upx;
      line-height: 90upx;
      background: linear-gradient(96deg, #FFE03E 0%, #FF9A16 100%);
      border-radius: 50upx;
      color: #fff;
      font-size: 30upx;
      position: relative;

      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #FFF;
        opacity: .4;
        z-index: 2;
      }
    }
    .quit {
      margin-top: 40upx;
      text-align: center;
      margin-bottom: 58upx;
      font-size: 30upx;
      color: #999999;
    }
    .protocol {
      display: flex;
      justify-content: space-between;
      padding: 0 10upx;
      color: #666;
      font-size: 26upx;
      .icon {
        width: 40upx;
        height: 40upx;
        margin-right: 21upx;
        background: url('http://localhost:3000/images/login/checkbox.png') center/100% no-repeat;
        &.active {
          background: url('http://localhost:3000/images/login/checkbox-ac.png') center/100% no-repeat;
        }
      }
      .text {
        flex: 1;
        .file {
          color: #FB6530;
        }
      }
    }
  }

}
</style>