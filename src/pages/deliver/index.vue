<template>
	<view class="content" style="height: 20000upx;">
        <m-navigat :hasBack="false" :opacity="opacity"></m-navigat>
		测试
	</view>
</template>

<script>
import scroll from '@/mixins/scroll.js';
	export default {
		mixins: [scroll],
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
