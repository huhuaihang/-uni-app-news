<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<list-card mode="base" :item="item" v-for="(item, index) in list" :key="item._id"></list-card>
		<uni-load-more iconType="snow" v-if="list.length > 9 || list.length === 0 " :status="load.loading"></uni-load-more>
<!-- 		<list-card mode="image"></list-card>
		<list-card mode="column"></list-card>
		<list-card mode="column"></list-card>
		<list-card mode="column"></list-card>
		<list-card mode="column"></list-card> -->
	</list-scroll>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			load:{
				type: Object,
				default() {
					return {
						loading:'loading'
					}
				}
			}
		},
		methods: {
			loadmore() {
				this.$emit('loadmore')
			}
		}
	}
</script>

<style>
	.list-scroll {
		height: 100%;
	}
</style>
