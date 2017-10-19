//
//
const state = {
	loginUser: {}
}

// getters
const getters = {
	isLogin(state) {
		if(state.loginUser && state.loginUser.id && state.loginUser.id != '') {
			return true
		}
		return false
	}
}

// actions
const actions = {}

// mutations
const mutations = {
	login(state, user) {
		state.loginUser = user;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}