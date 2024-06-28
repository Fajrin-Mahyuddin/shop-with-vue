import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import mycolors from "@/assets/colors";

const mypreset = definePreset(Aura, {
	semantic: {
		colorScheme: {
			light: {
				navigation: {
					// item: {
					// 	focusBackground: 'none',
					// 	activeBackground: mycolors.myorange.light,
					// 	focusColor: "#ffffff",
					// 	activeColor: "#ffffff",
					// 	icon: {
					// 		focusColor: "#fff",
					// 		activeColor: "#fff",
					// 	}
					// },
					// submenuIcon: {
					// 	focusColor: "#fff",
					// 	activeColor: "#fff"
					// }
				},
			},
			dark: {
				navigation: {
					// item: {
					// 	focusBackground: mycolors.myorange.dark,
					// 	activeBackground: mycolors.myorange.dark,
					// },
				}
			}
		}
	},
})

export default mypreset