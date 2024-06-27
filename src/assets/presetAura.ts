import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import mycolors from "@/assets/colors";

const mypreset = definePreset(Aura, {
	semantic: {
		navigation: {
			item: {
				fontSize: '6rem'
			}
		},
		colorScheme: {
			light: {
				navigation: {
					item: {
						focusBackground: mycolors.myorange.light,
						activeBackground: mycolors.myorange.light,
						focusColor: "#ffffff",
						activeColor: "#ffffff",
						icon: {
							focusColor: "#fff",
							activeColor: "#fff",
						}
					},
					submenuIcon: {
						focusColor: "#fff",
						activeColor: "#fff"
					}
				},
			},
			dark: {
				navigation: {
					item: {
						focusBackground: mycolors.myorange.dark,
						activeBackground: mycolors.myorange.dark,
						// focusColor: "#ffffff"
					},
				}
			}
		}
	},
})

export default mypreset