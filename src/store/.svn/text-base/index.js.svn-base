import Vue from 'vue'
import Vuex from 'vuex'
import BaseMenuStore from './modules/BaseMenuStore'
import LoginSessionStore from './modules/LoginSessionStore'
Vue.use(Vuex)

const store = new Vuex.Store({
	/*
	 * To enable strict mode, simply pass in strict: true;
	 * 
	 * Do not enable strict mode when deploying for production! 
	 * Strict mode runs a synchronous deep watcher on the state tree for 
	 * detecting inappropriate mutations, and it can be quite expensive 
	 * when you make large amount of mutations to the state. 
	 * Make sure to turn it off in production to avoid the performance cost.
	 * Similar to plugins, we can let the build tools handle that:
	 */
	strict: process.env.NODE_ENV !== 'production',
	//对象池
	//state: {},
	//修改对象的入口,只能使用同步修改; 全局对象 store.commit('objname',{new obj})
	//mutations: {},
	//与mutations相同，不同点在于actions中可以包含异步操作;全局对象 store.dispatch('increment',{new obj})
	//actions: {},
	//getters: {},
	//模块;拆分逻辑
	modules: {
		BaseMenuStore: BaseMenuStore,
		LoginSessionStore: LoginSessionStore
	}
	/*
	 * Application Structure
	 * Vuex doesn't really restrict how you structure your code. Rather, it enforces a set of high-level principles:
	 * Application-level state is centralized in the store.
	 * The only way to mutate the state is by committing mutations, which are synchronous transactions.
	 * Asynchronous logic should be encapsulated in, and can be composed with actions.
	 * As long as you follow these rules, it's up to you how to structure your project. If your store file gets too big, simply start splitting the actions, mutations and getters into separate files.
	 * For any non-trivial app, we will likely need to leverage modules. Here's an example project structure:
	├── index.html
	├── main.js
	├── api
	│   └── ... # abstractions for making API requests
	├── components
	│   ├── App.vue
	│   └── ...
	└── store
	    ├── index.js          # where we assemble modules and export the store
	    ├── actions.js        # root actions
	    ├── mutations.js      # root mutations
	    └── modules
	        ├── cart.js       # cart module
	        └── products.js   # products module
	* As a reference, check out the Shopping Cart Example.	https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
	*/
})

export default store