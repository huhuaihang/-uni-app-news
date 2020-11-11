<template>
	<view class="icons" @click.stop="likeTap">
		<uni-icons type="heart" size="20" color="#f07373"></uni-icons>
	</view>
</template>

<script>
	export default {
		props:{
			item: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				likes: false
			};
		},
		methods:{
			likeTap(){
				
				console.log('likes');
			},
			updateLikes(){
				this.$api.update_likes({
					user_id:'',
					article_id:''
				}).then(res=>{
					
				})
			}
		}
	}
</script>

<style>

</style>
