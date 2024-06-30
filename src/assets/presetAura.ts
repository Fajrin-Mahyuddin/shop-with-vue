import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { menuColorSchema } from "@/components/header/menuStyleConfig";

const mypreset = definePreset(Aura, {
  components: {
    menu: menuColorSchema,
  },
});

export default mypreset;
