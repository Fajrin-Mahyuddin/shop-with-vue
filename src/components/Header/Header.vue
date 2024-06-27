<script lang="ts" setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
// import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
import Container from '@/components/Container.vue';
import logo from '@/assets/logo.svg';
import { headerStyle, headerColorScheme } from './headerStyleConfig';

const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-home'
	},
	{
		label: 'Product',
		icon: 'pi pi-star'
	},
	{
		label: 'Projects',
		icon: 'pi pi-search',
		items: [
			{
				label: 'Components',
				icon: 'pi pi-bolt'
			},
			{
				label: 'Templates',
				icon: 'pi pi-palette',
				items: [
					{
						label: 'Apollo',
						icon: 'pi pi-palette'
					},
					{
						label: 'Ultima',
						icon: 'pi pi-palette'
					}
				]
			}
		]
	}
]);
const settingMenu = ref()
const settings = ref([
	{
		label: "Fajrin Mahyuddin",
		items: [
			{ label: "Profile", icon: "pi pi-plus" },
			{ label: "Logout", icon: "pi pi-sign-out" },
		]
	}
])

const handleSettings = (event: MouseEvent) => {
	settingMenu.value.toggle(event)
}
</script>

<template>
	<Container>
		<template #content>
			<Menubar :model="items" :pt="headerStyle" :dt="headerColorScheme">
				<template #start>
					<a href="# ">
						<img :src="logo" alt="main logo" class="w-[60px] mr-2" />
					</a>
				</template>
				<template #end>
					<button type="button" class="flex-auto" @click="handleSettings">
						<OverlayBadge value="4" severity="danger" class="inline-flex">
							<Avatar icon="pi pi-user" shape="circle" />
						</OverlayBadge>
					</button>
					<Menu ref="settingMenu" id="overlay_menu" :model="settings" :popup="true" :pt="headerStyle" />
				</template>
			</Menubar>
		</template>
	</Container>
</template>