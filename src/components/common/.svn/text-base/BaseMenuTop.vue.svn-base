<template>
	<Menu mode="horizontal" :active-name="menuActive" theme="light" @on-select="menuSelect">
		<div class="layout-nav">
			<template v-for="item in menuTopData">
				<MenuItem :name="item.id">
				<Icon :type="item.icon" v-if="item.icon != null"></Icon>
				{{ item.name }}
				</MenuItem>
			</template>
		</div>
	</Menu>
</template>

<script>
	export default {
		name: 'BaseMenuTop',
		computed: {
			menuTopData() {
				return this.$store.getters.menuTopData
			},
			menuActive() {
				if(this.$store.state.BaseMenuStore.menuTopActive) {
					return this.$store.state.BaseMenuStore.menuTopActive.id
				} else {
					return '';
				}
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				//加载menu数据
				var menu = require('@/json/menu.json')
				this.$store.commit('initMenus', menu)
				this.$store.commit('doMenuTop', this.menuTopData[0].id)

			})
		},
		methods: {
			menuSelect(menuid) {
				this.$store.commit('doMenuTop', menuid);
				this.$emit('select-menu', this.$store.state.BaseMenuStore.menuTopActive);
			}
		}
	}
</script>

<style>
	.layout-nav {
		width: auto;
		margin: 0 auto;
	}
</style>