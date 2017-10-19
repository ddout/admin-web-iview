<template>
	<div class="layout">
		<BaseHead></BaseHead>
		<BaseMenuTop v-if="isLogin"></BaseMenuTop>
		<div class="layout-content">
			<Row type="flex">
				<Col span="4" v-if="isLogin">
				<BaseMenuLeft></BaseMenuLeft>
				</Col>
				<Col :span="isLogin? 20 : 24">
				<div class="layout-content-main-content">
					<BaseBreadcrumb v-if="isLogin"></BaseBreadcrumb>
					<div class="layout-content-main">
						<router-view/>
					</div>
				</div>
				</Col>
			</Row>
		</div>
		<BaseFooter></BaseFooter>
	</div>
</template>
<script>
	import BaseHead from '@/components/common/BaseHead'
	import BaseFooter from '@/components/common/BaseFooter'
	import BaseMenuTop from '@/components/common/BaseMenuTop'
	import BaseMenuLeft from '@/components/common/BaseMenuLeft'
	import BaseBreadcrumb from '@/components/common/BaseBreadcrumb'

	export default {
		name: 'app',
		components: {
			BaseHead,
			BaseFooter,
			BaseMenuTop,
			BaseMenuLeft,
			BaseBreadcrumb
		},
		data() {
			return {}
		},
		computed: {
			isLogin() {
				return this.$store.getters.isLogin
			}
		},
		mounted: function() {
			this.$nextTick(function() {})
		},
		methods: {}

	}
</script>

<style scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.layout-content {
		min-height: 400px;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
	}
	
	.layout-content-main-content {
		background: #f5f7f9;
	}
	
	.layout-content-main {
		margin-top: 5px;
		padding: 10px;
		padding-bottom: 50px;
		background: #fff;
		word-wrap: break-word;
		border-radius: 4px;
	}
</style>