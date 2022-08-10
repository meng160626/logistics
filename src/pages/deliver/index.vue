<template>
	<view class="content fl-cl">
        <m-navigat :hasBack="false" :opacityVal="opacity" title="发货"></m-navigat>
		
		<!-- 标语 -->
		<view class="slogan fl-cl-center-start">
			<text>高速物流助手</text>
			<text>让货运更安全，更迅速，更省钱</text>
		</view>

		<!-- 收发货地址 -->
		<select-address></select-address>

		<!-- 货源链接 -->
		<view class="card btn-box fl-between">
			<view class="btn fl-cl-center" v-on:click="onCreateSourceBtnClick">
				<image src="@/static/image/deliver/create-goods-icon.png" />
				<text>创建货源</text>
			</view>
			<view class="btn fl-cl-center">
				<image src="@/static/image/deliver/often-goods-icon.png" />
				<text>常发货源</text>
			</view>
			<view class="btn fl-cl-center">
				<image src="@/static/image/deliver/done-goods-icon.png" />
				<text>已发布货源</text>
			</view>
		</view>

		<!-- 广告 -->
		<view class="card advertisement-list">
			<view class="advertisement" v-for="item in [0,1]" :key="item">
				<view class="fl-between-end title">
					<text>货运无忧险 | 全国范围可保</text>
					<view>
						<image src="@/static/image/common/money-icon.png" />
						<text>13.5</text>
						<text>起</text>
					</view>
				</view>
				<text>承保各类货物，费率低至0.135‰</text>
				<view class="fl-between-end">
					<text>10536位货主已投保</text>
					<view class="btn">立即购买</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import selectAddress from "@/components/custom-card/select-address/index.vue";
export default {
	components: {
		selectAddress
	},
	data() {
		return {
		}
	},
	onLoad() {
		uni.navigateTo({
			url: '/deliver-pages/allocate-company-goods/index'
		});
	},
	methods: {
		/**
		 * 创建货源
		 */
		onCreateSourceBtnClick() {
			uni.navigateTo({
				url: '/deliver-pages/create-source/index'
			});
		}
	}
}
</script>

<style scoped lang="scss">
.content {
	padding: 0 24upx 36upx 24upx;
	gap: 24upx;

	.slogan {
		padding-left: 30upx;
		color: #fff;
		gap: 26upx;
		font-size: 30upx;
		margin-bottom: 16upx;

		text:nth-child(2) {
			font-size: 36upx;
		}
	}

	.btn-box {
		padding: 30upx 60upx;

		.btn {
			gap: 24upx;
			image {
				width: 56upx;
				height: 69upx;
			}
		}
	}

	.advertisement-list {
		font-size: 28upx;
		padding: 0 30upx;

		.advertisement {
			padding: 30upx 0 43upx 0;

			& + .advertisement {
				border-top: 1px solid #F0F0F0;
			}
			.title {
				image {
					width: 20upx;
					height: 20upx;
				}
				text:nth-child(1) {
					font-size: 34upx;
					font-weight: bold;
					color: #333333;
				}
				text:nth-child(2) {
					font-size: 34upx;
					font-weight: bold;
					color: #FC7809;
				}
			}
			& > text:nth-child(2) {
				display: inline-block;
				margin: 16upx 0 18upx 0;
				color: #666666;
			}
			.btn {
				width: 186upx;
				height: 60upx;
				background: #FECC2A;
				border-radius: 30upx;
				font-size: 30upx;
				color: #530C00;
				text-align: center;
				line-height: 60upx;
			}
			& > view:nth-child(3) {
				color: #999999;
			}
		}
	}
}
</style>
