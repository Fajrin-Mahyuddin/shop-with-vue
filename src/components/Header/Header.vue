<script lang="ts" setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import Container from '@/components/Container.vue';
// const items = defineModel<{ label: string, icon: string }[]>({ required: true })
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
	}
]);
</script>

<template>
	<Container>
		<template #content>
			<Menubar :model="items">
				<template #item="{ item }">
					<a href="# " class="flex items-center text-[14px] py-2 px-3">
						<span :class="item.icon" />
						<span class="ml-2">{{ item.label }}</span>
					</a>
				</template>
			</Menubar>
		</template>
	</Container>
</template>