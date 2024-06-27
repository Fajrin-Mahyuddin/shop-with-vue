import mycolors from "@/assets/colors";

export const headerColorScheme = {
	colorScheme: {
		light: {
			root: {
				background: mycolors.mywhite.light,
			},
		},
		dark: {
			root: {
				background: mycolors.mywhite.dark,
			},
			submenu: {
				background: mycolors.mywhite.dark
			}
		}
	},
	border: {
		color: "none"
	},
}

export const headerStyle = {
	item: {
		class: 'text-[14px]'
	},
	itemIcon: {
		class: 'text-[14px]'
	},
}
