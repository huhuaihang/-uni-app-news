<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
	    <swiper-item class="swiper-item" v-for="(item, index) in tab"  :key="index">
	        <list-item :list="listCatchData[index]" :load="load[index]" @loadmore="loadmore"></list-item>
	    </swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	
	export default {
		components: {
			listItem
		},
		props: {
			tab: {
				type: Array,
				default() {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		
		data() {
			return {
				 list: [],
				 // js 限制  listCatchData[index] = data
				 listCatchData: {},
				 load:{
					 
				 },
				 page: 1,
				 pageSize: 5
			};
		},
		watch:{
			tab(newVal) {
				if (newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		// onLoad 在页面 created在组件
		created(){
			// TODO tab 还没有赋值
			// this.getList(0)
		},
		methods: {
			loadmore() {
				// this.page ++
				if (this.load[this.activeIndex].loading === 'noMore') {
					return
				}
				this.load[this.activeIndex].page ++
				this.getList(this.activeIndex)
			},
			change(e) {
				const {current} = e.detail
				console.log(this.tab[current]);
				
				this.$emit('change', current);
				if (!this.listCatchData[current] || this.listCatchData[current].length === 0) {
					this.getList(current)	
				}
				
			},
			getList(current) {
				if (!this.load[current]) {
					this.load[current] = {
						page:1,
						load: 'loading'
					}
				}
				this.$api.get_list({
					name: this.tab[current].name,
					page: this.load[current].page,
					pageSize: 5
					}).then(res=>{
					const {data} = res
					console.log(data)
					// this.list = data
					if (data.length === 0){
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						// 强制渲染页面
						this.$forceUpdate()
						return 
					}
					// this.listCatchData[current] = data
					let oldList = this.listCatchData[current] || []
					oldList.push(...data)
					// 通知页面数组 数据发生变化 $set (数组  当前项  实际数据)
					this.$set(this.listCatchData, current, oldList)
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;
		.swiper-item {
			height: 100%;
			overflow: hidden;
			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
