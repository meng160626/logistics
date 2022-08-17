<template>
	<view class="user">
		<m-navigat title="我的" :opacity="opac" :hasBack="false"></m-navigat>

		<view class="contet fl-cl">
			<!-- 用户信息 -->
			<view class="info fl-start">
				<image class="head" :src="getUrl('/user/user-head.png')" />
				<view class="fl-cl-between-start">
					<view class="fl-center">
						<text>王富贵</text>
						<image class="vip" :src="getUrl('/user/member-name.png')" />
					</view>
					<view class="car-no">川A20658</view>
				</view>
			</view>

			<view class="package">
				<view class="data fl-between-start">
					<view class="fl-cl-center">
						<text><text class="num">269</text>公里</text>
						<text>今日里程</text>
					</view>
					<view class="fl-cl-center">
						<text><text class="num">4269</text>公里</text>
						<text>总里程</text>
					</view>
					<view class="fl-cl-center">
						<text><text class="num">2377</text></text>
						<text>里程积分</text>
					</view>
					<view class="fl-cl-center">
						<text><text class="num">3</text>张</text>
						<text>优惠券</text>
					</view>
				</view>

				<view>
					<u-cell-group :border="false">
						<u-cell title="会员" :border="false" :isLink="true" @click="onMemberBtnClick">
							<image style="width: 33upx;height: 29upx;" :src="getUrl('/user/member-icon.png')" slot="icon" />
							<image style="width: 150upx;height: 36upx;" :src="getUrl('/user/member-name.png')" slot="value" />
						</u-cell>
						<u-cell title="我的收益" :border="false" :isLink="true" @click="onPackageBtnClick">
							<image style="width: 31upx;height: 31upx;" :src="getUrl('/user/line-icon.png')" slot="icon" />
							<view slot="value" class="value-box fl-center">
								<text>有新收益啦！</text>
								<view class="temp"></view>
							</view>
						</u-cell>
					</u-cell-group>
				</view>
			</view>

			<view class="card">
				<u-cell-group :border="false">
					<u-cell title="承运合同" :border="false" :isLink="true">
						<image style="width: 31upx;height: 31upx;" :src="getUrl('/user/bill-icon.png')" slot="icon" />
					</u-cell>
				</u-cell-group>
			</view>
			
			<view class="card">
				<u-cell-group :border="false">
					<u-cell title="个人信息" :border="false" :isLink="true">
						<image style="width: 36upx;height: 31upx;" :src="getUrl('/user/card-icon.png')" slot="icon" />
					</u-cell>
					<u-cell title="车辆管理" :border="false" :isLink="true">
						<image style="width: 33upx;height: 31upx;" :src="getUrl('/user/car-icon.png')" slot="icon" />
					</u-cell>
					<u-cell title="更多设置" :border="false" :isLink="true">
						<image style="width: 32upx;height: 29upx;" :src="getUrl('/user/setting-icon.png')" slot="icon" />
					</u-cell>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
		/**
		 * 跳转钱包
		 */
		onPackageBtnClick() {
			uni.navigateTo({
				url: '/user-pages/packages/index'
			});
		},
		/**
		 * 跳转会员
		 */
		onMemberBtnClick() {
			uni.navigateTo({
				url: '/user-pages/member/index'
			});
		}
	}
}
</script>

<style scoped lang="scss">
.contet {
	gap: 24upx;

	.info {
		padding: 0 24upx;
		gap: 24upx;
		font-size: 36upx;
		font-weight: bold;
		color: #FFFFFF;

		& > view {
			gap: 24upx;

			view {
				gap: 16upx;
			}
		}
		.head {
			width: 117upx;
			height: 117upx;
		}
		.vip {
			width: 150upx;
			height: 36upx;
		}
	}

	.package {
		margin-top: 18upx;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
		box-shadow: 0 3upx 12upx 1upx rgba(189,190,193,0.2000);

		.data {
			margin: 0 24upx;
			width: calc(100% - 48upx);
			background: url('@/static/image/user/toolbox-bg.png');
			background-size: 100% 100%;
			height: 210upx;

			view {
				width: 25%;
				height: 142upx;
				font-size: 24upx;
				color: #FFEACC;
				gap: 12upx;

				text:first-child {
					color: #FFFFFF;

					text {
						font-size: 36upx;
						font-weight: bold;
					}
				}
			}
		}
		.value-box {
			font-size: 24upx;
			color: #999999;
			gap: 8upx;

			.temp {
				width: 16upx;
				height: 16upx;
				background: #FF4C4F;
				border-radius: 50%;
			}
		}
	}
}
</style>
