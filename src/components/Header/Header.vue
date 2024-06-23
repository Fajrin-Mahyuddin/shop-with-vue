<script lang="ts" setup>
import Menubar from 'primevue/menubar';
import { ref, defineProps } from 'vue';

// const itemss = defineModel();
const { menus } = defineProps(["menus"])
const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-home'
	},
	{
		label: 'Features',
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
				label: 'Blocks',
				icon: 'pi pi-server'
			},
			{
				label: 'UI Kit',
				icon: 'pi pi-pencil'
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
	},
	{
		label: 'Contact',
		icon: 'pi pi-envelope'
	}
]);
</script>

<template>
	<Menubar :model="items" class="bg-[salmon]" />
	<br />
	<h1>
		<slot name="foo" />
		<div class="text-red-500">
			<slot name="bar" v-bind="menus" />
		</div>
	</h1>
</template>