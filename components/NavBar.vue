<template>
	<b-navbar toggleable="md" class="navbar px-0">
		<b-navbar-brand href="/" class="d-flex align-items-center">
			<img src="/icons/favicon-32x32.png" width="32" height="32" class="d-block mr-2" alt="Home Icon">
			Stanrogo
		</b-navbar-brand>
		<b-navbar-toggle target="nav_collapse" />
		<b-collapse id="nav_collapse" is-nav>
			<b-navbar-nav class="ml-auto">
				<b-nav-item v-for="item in directNavs" :key="item.name" :to="item.to" :exact="item.exact"
					class="font-small text-uppercase"
				>
					{{ item.name }}
				</b-nav-item>
				<b-nav-item-dropdown v-for="nav in dropDownNavs" :key="nav.name" :text="nav.name" :exact="nav.exact"
					class="font-small text-uppercase" right
				>
					<b-dropdown-item v-for="item in nav.items" :key="item.pageName"
						:to="'/' + nav.name.toLowerCase() + '/' + item.pageName + '/'"
					>
						{{ item.title }}
					</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'Navbar',
	computed: {
		directNavs() {
			return this.$store.state.navItems.filter(x => Object.keys(x).indexOf('items') === -1);
		},
		dropDownNavs() {
			return this.$store.state.navItems.filter(x => Object.keys(x).indexOf('items') !== -1);
		},
	},
};
</script>
