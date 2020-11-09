<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navBar></navBar>
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<view class="home-list">
			<list :tab="tabList" @change="change" :activeIndex="activeIndex"></list>	
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/navbar/navbar.vue';
	import tab from '@/components/tab/tab.vue';
	import listScroll from '@/components/list-scroll/list-scroll.vue';
	import listCard from '@/components/list-card/list-card.vue'
	import list from '@/components/list/list.vue'
	
	export default {
		components: {
			navBar,
			tab,
			listScroll,
			listCard,
			list
		},
		data() {
			return {
				title: 'Hello',
				tabIndex: 0,
				activeIndex: 0,
				tabList: []
			}
		},
		onLoad() {
			this.getLabel();
		},
		methods: {
			change(current){
				console.log(current);
				this.tabIndex = current
				this.activeIndex = current
			},
			tab({data, index}){
				console.log(data, index)
				this.activeIndex = index
			},
			getLabel() {
				console.log(this.$api);
				this.$api.get_label({
					name:'get_label'
				}).then((res) => {
					const {
						data
					} = res
					data.unshift({
						name:'全部'
					})
					this.tabList = data;
				})
				// uniCloud.callFunction({
				// 	name: 'get_label',
				// }).then((res) => {
				// 	console.log(res);
				// 	const {result} = res
				// 	console.log(result);
				// 	this.tabList = result.data
				// 	console.log(this.tabList);
				// })
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		// border: 1px red solid;
		overflow: hidden;
		.home-list {
			flex: 1;
			box-sizing: border-box;
		}
	}
	
</style>
