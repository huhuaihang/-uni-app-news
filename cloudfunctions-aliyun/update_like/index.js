'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const dbCmd = db.command
	const {
		user_id,
		article_id
	} = event
	
	const userinfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userinfo.data[0].article_likes_ids
	let dbCmdFuns = null
	
	if (article_id_ids.includes(article_id)) {
		dbCmd.push(article_id)
	} else {
		dbCmd.addToSet(article_id)
	}
	
	await db.collection('user').doc(user_id).update({
		article_likes_ids:dbCmdFuns
	})
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return userinfo
};
