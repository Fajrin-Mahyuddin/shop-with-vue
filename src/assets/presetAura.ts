import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import mycolors from "@/assets/colors";
import { menubarStyle } from "@/components/Header/headerStyleConfig";

const mypreset = definePreset(Aura, {
	semantic: {
		colorScheme: {
			light: {
				navigation: {
					item: {
						focusBackground: mycolors.myorange.light,
						focusColor: "#ffffff"
					}
				},
			},
			dark: {
				navigation: {
					item: {
						focusBackground: mycolors.myorange.dark,
						focusColor: "#ffffff"
					},
				}
			}
		}
	},
	components: {
		menubar: menubarStyle
	}
})

export default mypreset