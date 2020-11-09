<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarheight + 'px'}"></view>
			<!-- 导航栏 -->
			<view class="navbar-content" :style="{height:navBarHeight + 'px', width:windowWidth +'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar_search_text">搜索关键词</view>
				</view>			
			</view>
		</view>
		<view :style="{height: navBarHeight + statusBarHeight +'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windowWidth:375
			};
		},
		created() {
			// 系统信息
			const info = uni.getSystemInfo();
			this.windowWidth = info.windowWidth;
			// 状态栏高度
			this.statusBarheight = info.statusBarHeight;
			// #ifndef MP-ALIPAY || H5 || APP-PLUS
			// 获取胶囊位置信息
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			console.log(menuButtonInfo);
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight);
			this.windowWidth = menuButtonInfo.left
			// #endif
			
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			
			
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content{
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				padding: 0 15px;
				height: 45px;
				.navbar-search {
					width: 100%;
					display: flex;
					align-items: center;
					height: 30px;
					padding: 0 10px;
					border-radius: 30px;
					background-color: #fff;
					.navbar-search_icon {
						margin-right: 10px;
					}
					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
	
</style>
