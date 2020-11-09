'use strict';
// 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		name,
		page = 1,
		pageSize = 10
	} = event
	let  matchObj = {}
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}
	// var name = event.name
	// 聚合 更精细化去处理数据 求和 分组 指定哪些字段
	
	const list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content: false
	})
	//要跳过多少数据
	.skip(pageSize*(page -1))
	.limit(pageSize)
	.end()
	// const list = await db.collection('article')
	// .field({
	// 	// true 只返回  false 不返回
	// 	content:false
	// }).get()
	
	//返回数据给客户端
	return {
		code: 200,
		msg: 'success',
		data: list.data
	}
};
