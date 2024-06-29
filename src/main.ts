import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "@/App.vue";
import PrimeVue from "primevue/config";
import mypreset from "@/assets/presetAura";

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: mypreset,
      options: {
        cssLayer: {
          name: "primevue",
          order: "tailwind-base, primevue, tailwind-utilities",
        },
      },
    },
  })
  .mount("#app");
