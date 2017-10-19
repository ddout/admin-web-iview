<template>
	<div class="layout-breadcrumb">
		<Breadcrumb>
			<BreadcrumbItem href="/">首页</BreadcrumbItem>
			<template v-for="menu in breadcrumbArr">
				<BreadcrumbItem :href="menu.routeName">{{menu.name}}</BreadcrumbItem>
			</template>
		</Breadcrumb>
	</div>
</template>

<script>
	export default {
		name: 'BaseBreadcrumb',
		computed: {
			breadcrumbArr() {
				return this.$store.getters.breadcrumb
			}
		}
	}
</script>

<style>
	.layout-breadcrumb {
		padding: 5px 15px 5px 15px;
		background: #fff;
		border-radius: 4px;
	}
</style>