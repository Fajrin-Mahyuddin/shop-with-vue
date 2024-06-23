import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
// import './assets/css/preflight.css';
import App from '@/App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
// import { definePreset } from '@primevue/themes';

createApp(App).use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			cssLayer: {
				name: "primevue",
				order: 'tailwind-base, primevue, tailwind-utilities'
			}
		}
	}
}).mount('#app')
