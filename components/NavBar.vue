<template>
	<b-navbar toggleable="md" class="navbar px-0">
		<b-navbar-brand href="/">
			<img
				src="/icons/favicon-32x32.png"
				width="32"
				height="32"
				class="d-inline-block align-top"
				alt="Home Icon"
			>
			Stanrogo
		</b-navbar-brand>
		<b-navbar-toggle target="nav_collapse" />
		<b-collapse id="nav_collapse" is-nav>
			<b-navbar-nav class="ml-auto">
				<b-nav-item
					v-for="item in directNavs"
					:to="item.to"
					:key="item.name"
					:exact="item.exact"
				>
					{{ item.name }}
				</b-nav-item>
				<b-nav-item-dropdown
					v-for="nav in dropDownNavs"
					:key="nav.name"
					:text="nav.name"
					:exact="nav.exact"
					right
				>
					<b-dropdown-item
						v-for="item in nav.items"
						:key="item.pageName"
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
			return this.$store.state.navItems.filter(x => !x.hasOwnProperty('items'));
		},
		dropDownNavs() {
			return this.$store.state.navItems.filter(x => x.hasOwnProperty('items'));
		},
	},
	async mounted() {
		const projects = await this.$contentful.getEntries({
			content_type: 'portfolio',
		});
		const jobs = await this.$contentful.getEntries({ content_type: 'work', });
		const mappedJobs = jobs.items.map(x => {
			return {
				title: x.fields.company,
				pageName: x.fields.pageName,
			};
		});
		this.$store.commit('setNavItems', {
			name: 'Projects',
			items: projects.items.map(x => x.fields),
		});
		this.$store.commit('setNavItems', { name: 'Work', items: mappedJobs, });
	},
};
</script>

<style lang="scss">
	.dropdown-menu {
		border-radius: 0;
	}

	.nav-link {
		text-transform: uppercase;
		font-size: 13px;
	}
</style>
