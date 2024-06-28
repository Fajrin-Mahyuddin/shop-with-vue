import mycolors from "@/assets/colors";
import { MenubarDesignTokens } from "@primevue/themes/aura/menubar";

export const headerColorScheme: MenubarDesignTokens = {
	colorScheme: {
		light: {
			root: {
				background: mycolors.mywhite.light,
			},
			item: {
				activeBackground: mycolors.myorange.light,
				focusBackground: mycolors.myorange.light,
				activeColor: mycolors.mywhite.light,
				focusColor: mycolors.mywhite.light,
				icon: {
					focusColor: mycolors.mywhite.light,
					activeColor: mycolors.mywhite.light,
				}
			},
			submenuIcon: {
				focusColor: mycolors.mywhite.light,
				activeColor: mycolors.mywhite.light,
			}
		},
		dark: {
			root: {
				background: mycolors.mywhite.dark,
			},
			item: {
				activeBackground: mycolors.myorange.dark,
				focusBackground: mycolors.myorange.dark,
				activeColor: mycolors.mywhite.light,
				focusColor: mycolors.mywhite.light,
				icon: {
					focusColor: mycolors.mywhite.light,
					activeColor: mycolors.mywhite.light,
				}
			},
			submenu: {
				background: mycolors.mywhite.dark
			}
		}
	},
}

export const headerStyle = {
	root: 'border-none',
	item: 'text-[15px]',
	itemIcon: 'text-[15px]',
}

export const menuStyle = {
	root: 'border-none bg-mywhite-light dark:bg-mywhite-dark',
	item: 'text-[15px]',
	itemIcon: 'text-[15px]',
}
