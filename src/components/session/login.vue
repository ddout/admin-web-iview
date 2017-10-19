<template>
	<div>
		login.....{{this.$store.getters.isLogin}}
		<br/> {{redirect}}
		<br/>
		<Button @click="login">login</Button>
	</div>
</template>

<script>
	export default {
		name: 'login',
		computed: {
			redirect() {
				if(this.$route.query.redirect == undefined) {
					return '/'
				} else if(this.$route.query.redirect == this.$route.path) {
					return '/'
				}
				return this.$route.query.redirect
			}
		},
		methods: {
			login() {
				this.$store.commit('login', {
					id: '123',
					name: 'admin'
				});
				if(this.$store.getters.isLogin == true) {
					this.$router.push({
						path: this.redirect
					})
				}
			}
		}
	}
</script>

<style>

</style>