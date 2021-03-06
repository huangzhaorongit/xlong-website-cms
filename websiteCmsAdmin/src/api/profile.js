import tools from '@/tools'

export default {
    // 获取用户信息
    GetUserInfo: (token) => {
        return new Promise((resolve,reject)=>{
			tools.HttpGet(`/api/WebsiteCms/UserService/Person/GetUserInfo?token=${token}`)
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
    },
    // 修改个人资料
    EditProfile: (params) => {
		return new Promise((resolve, reject) => {
			tools.HttpPost(`/api/WebsiteCms/UserService/Person/EditProfile`, params)
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
	},
    // 修改密码
    ChangePwd: (params) => {
        return new Promise((resolve,reject)=>{
			tools.HttpPost(`/api/WebsiteCms/UserService/Person/ChangePwd`, params)
			.then(res => resolve(res))
			.catch(err => reject(err))
		})
    }
}