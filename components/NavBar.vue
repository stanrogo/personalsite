<template>
	<b-navbar toggleable="md" class="navbar px-0">
		<b-navbar-brand href="/" class="d-flex align-items-center">
			<img src="/icons/favicon-32x32.png" width="32" height="32" class="d-block mr-2" alt="Home Icon">
			Stanrogo
		</b-navbar-brand>
		<b-navbar-toggle target="nav_collapse" />
		<b-collapse id="nav_collapse" is-nav>
			<b-navbar-nav class="ml-auto">
				<b-nav-item v-for="item in $store.state.navItems" :key="item.name" :to="item.to"
					class="font-small text-uppercase"
				>
					{{ item.name }}
				</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'Navbar',
};
</script>
