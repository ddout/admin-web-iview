// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css'

import Ajax from './components/common/plugs/ajax'

Vue.config.productionTip = false

Vue.use(iView);

//注册路由全局钩子
router.beforeEach((to, from, next) => {
	if(to.matched.length == 0) {
		next(false);
		next('/404');
	} else {
		for(var i = 0; i < to.matched.length; i++) {
			if(to.matched[i].meta.requiresAuth == true) {
				next();
			} else if(store.getters.isLogin == true) {
				next();
			} else {
				next({
					path: '/login',
					query: {
						redirect: to.fullPath
					}
				})
			}
		}
	}
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App
	}
});