import mycolors from "@/assets/colors";
import { MegaMenuDesignTokens } from '@primevue/themes/aura/megamenu';

export const subheaderColorScheme: MegaMenuDesignTokens = {
	colorScheme: {
		light: {
			root: {
				background: mycolors.mygray.light,
			},
			item: {
				activeBackground: 'transparent',
				focusBackground: 'transparent',
				focusColor: mycolors.myorange.light,
				activeColor: mycolors.myorange.light,
				icon: {
					focusColor: mycolors.myorange.light,
					activeColor: mycolors.myorange.light,
				}
			},
			submenuIcon: {
				focusColor: mycolors.myorange.light,
				activeColor: mycolors.myorange.light
			},
		},
		dark: {
			root: {
				background: mycolors.mygray.dark,
			},
			item: {
				activeBackground: 'transparent',
				focusBackground: 'transparent',
				focusColor: mycolors.mywhite.light,
				activeColor: mycolors.mywhite.light,
				icon: {
					color: mycolors.mygray.light,
					focusColor: mycolors.mywhite.light,
					activeColor: mycolors.mywhite.light,
				}
			},
			submenuIcon: {
				color: mycolors.mywhite.light,
				focusColor: mycolors.mywhite.light,
				activeColor: mycolors.mywhite.light
			},
		}
	},
}

export const subheaderStyle = {
	root: 'p-0 border-none',
	submenu: 'hover:[&_.p-megamenu-item-content]:bg-mygray-dark',
	item: 'text-[14px] [&:first-child>.p-megamenu-item-content>.p-megamenu-item-link]:pl-0',
	itemIcon: 'text-[13px]',
	overlay: 'bg-mywhite-light dark:bg-mywhite-dark border-none'
}