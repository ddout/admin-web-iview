import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/404',
			name: '404',
			component: () =>
				import('@/components/common/Base404')
		}, {
			path: '/login',
			name: 'login',
			meta: {
				requiresAuth: true
			},
			component: () =>
				import('@/components/session/login')
		}, {
			path: '/',
			name: 'BaseHelloIndex',
			props: true,
			component: () =>
				import('@/components/session/BaseHelloIndex')
		},
		{
			path: '/btable',
			name: 'btable',
			props: true,
			component: () =>
				import('@/components/demo/btable')
		}
	]
})