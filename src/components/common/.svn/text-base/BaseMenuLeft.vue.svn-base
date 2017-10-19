<template>
	<Menu width="auto" @on-select="menuSelect" accordion>

		<template v-for="item in menuLeftData">
			<Submenu :name="item.id" v-if="item.child != null">
				<template slot="title">
					<Icon :type="item.icon" v-if="item.icon != null"></Icon>
					{{item.name}}
				</template>

				<template v-for="child in item.child">
					<MenuItem :name="child.id">{{child.name}}</MenuItem>
				</template>

			</Submenu>

			<MenuItem :name="item.id" v-else-if="item.child == null">
			<Icon :type="item.icon" v-if="item.icon != null"></Icon>
			{{item.name}}
			</MenuItem>

		</template>

	</Menu>
</template>

<script>
	export default {
		name: 'BaseMenuLeft',
		computed: {
			menuLeftData() {
				return this.$store.getters.menuItemData;
			}
		},
		methods: {
			menuSelect(menuid) {
				this.$store.commit('doMenuItem', menuid);
				var menu = this.$store.state.BaseMenuStore.menuItemActive;
				if(menu.routeName) {
					this.$router.push({
						name: menu.routeName
					});
				}
				this.$emit('select-menu', menu);
			}
		}
	}
</script>

<style>

</style>