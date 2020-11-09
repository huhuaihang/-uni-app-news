import $http from './http.js'

export const get_label = (data) => {
	return $http({
		url: 'get_label',
		data
	});
	//封装前的代码
	// return new Promise((reslove, reject) => {
	// 	uniCloud.callFunction({
	// 		name: 'get_label',
	// 		data
	// 	}).then((res) => {
	// 		if (res.result.code == 200) {
	// 			reslove(res.result)
	// 		} else {
	// 			reject(res.result);
	// 		}
	// 		const {result} = res
	// 		this.tabList = result.data
	// 	}).catch((err)=>{
	// 		reject(err);
	// 	})
	// });
}

export const get_list = (data) => {
	return $http({
		url: 'get_list',
		data
	});
}