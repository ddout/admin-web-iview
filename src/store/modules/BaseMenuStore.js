//
//
const state = {
	menus: [],
	menuTopActive: null,
	menuItemActive: null,
	breadcrumbArr: []
}

// getters
const getters = {
	menuTopData(state) {
		return state.menus
	},
	menuItemData(state) {
		if(state.menuTopActive) {
			return state.menuTopActive.child
		} else {
			return []
		}
	},
	breadcrumb(state) {
		return state.breadcrumbArr
	}
}

// actions
const actions = {}

// mutations
const mutations = {
	initMenus(state, menus) {
		state.menus = menus
	},
	unMenuActive(state) {
		state.menuTopActive = null
		state.menuItemActive = null
		state.breadcrumbArr = []
	},
	doMenuTop(state, menuid) {
		for(var i = 0; i < state.menus.length; i++) {
			if(state.menus[i].id == menuid) {
				state.menuTopActive = state.menus[i];
				break;
			}
		}
	},
	doMenuItem(state, menuid) {
		const queryChildMenu = function(menuData, id) {
			if(menuData.length) {
				for(var i = 0; i < menuData.length; i++) {
					var obj = menuData[i]
					if(obj.id == id) {
						return obj
					} else if(obj.child) {
						var child = queryChildMenu(obj.child, id)
						if(child != null) {
							return child
						}
					}
				}
			} else if(menuData.id == id) {
				return menuData
			}
			return null
		}
		state.menuItemActive = queryChildMenu(state.menuTopActive.child, menuid)
		if(state.breadcrumbArr.length > 0) {
			if(state.breadcrumbArr[state.breadcrumbArr.length - 1].name != state.menuItemActive.name) {
				if(state.breadcrumbArr.length >= 5) {
					state.breadcrumbArr.shift();
				}
				state.breadcrumbArr.push(state.menuItemActive)
			}
		} else {
			state.breadcrumbArr.push(state.menuItemActive)
		}

	}

}

export default {
	state,
	getters,
	actions,
	mutations
}